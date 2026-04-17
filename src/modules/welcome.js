/**
 * Welcome screen logic
 */

export function initWelcome(onStart) {
    const overlay = document.getElementById('welcome-overlay');
    const btn = document.getElementById('start-btn');

    btn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        setTimeout(() => {
            overlay.style.display = 'none';
            onStart();
        }, 700);
    });
}
