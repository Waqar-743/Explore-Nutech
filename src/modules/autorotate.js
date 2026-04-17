/**
 * Custom autorotate logic
 * - On scene load: auto-rotate right, stop after 20s
 * - On user interaction: stop, track direction
 * - After 8s idle: resume in user's last direction, stop after 20s
 */

let autoStopTimer = null;
let idleTimer = null;
let lastYaw = null;
let lastDirection = 1; // 1 = right, -1 = left
let userInteracting = false;

export function initAutorotate(viewer, autorotate) {
    function startWithStop(direction) {
        clearTimeout(autoStopTimer);
        const speed = direction > 0 ? '0.5rpm' : '-0.5rpm';
        autorotate.setOptions({ autorotateSpeed: speed });
        autorotate.start();
        autoStopTimer = setTimeout(() => autorotate.stop(), 20000);
    }

    function resetIdleTimer() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            if (!userInteracting) startWithStop(lastDirection);
        }, 8000);
    }

    viewer.addEventListener('position-updated', ({ position }) => {
        if (userInteracting && lastYaw !== null) {
            const delta = position.yaw - lastYaw;
            if (Math.abs(delta) > 0.001 && Math.abs(delta) < Math.PI) {
                lastDirection = delta > 0 ? 1 : -1;
            }
        }
        lastYaw = position.yaw;
    });

    function stopAll() {
        userInteracting = true;
        autorotate.stop();
        clearTimeout(autoStopTimer);
        clearTimeout(idleTimer);
    }

    function resumeIdle() {
        userInteracting = false;
        resetIdleTimer();
    }

    viewer.addEventListener('before-rotate', stopAll);
    viewer.addEventListener('after-rotate', resumeIdle);
    viewer.container.addEventListener('mousedown', stopAll);
    viewer.container.addEventListener('touchstart', stopAll);
    window.addEventListener('mouseup', () => { if (userInteracting) resumeIdle(); });
    window.addEventListener('touchend', () => { if (userInteracting) resumeIdle(); });

    // Return a function to start autorotate on scene change
    return {
        onSceneChange() {
            lastYaw = null;
            lastDirection = 1;
            startWithStop(1);
        }
    };
}
