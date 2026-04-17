/**
 * Tutorial modal flow with step dots
 */

const STEPS = [
    { icon: '&#128073;', title: 'Navigate Scenes', text: 'Click the blue walking-person hotspots to move between different campus locations.' },
    { icon: '&#128256;', title: 'Look Around', text: 'Click and drag (or swipe on mobile) to pan around the 360-degree panorama. Scroll to zoom in/out.' },
    { icon: '&#8505;&#65039;', title: 'Discover Info', text: 'Click the yellow "i" hotspots to reveal interesting details about each location.' },
    { icon: '&#128506;', title: 'Use the Minimap', text: 'The minimap in the top-left shows your position. Click any node to jump directly to that scene.' },
    { icon: '&#128444;&#65039;', title: 'Quick Gallery', text: 'Click the gallery button in the bottom-right to open thumbnail previews and jump to any scene instantly.' }
];

let currentStep = 0;

export function initTutorial(onComplete) {
    const overlay = document.getElementById('tutorial-overlay');
    const title = document.getElementById('tutorial-title');
    const indicator = document.getElementById('tutorial-step-indicator');
    const text = document.getElementById('tutorial-text');
    const nextBtn = document.getElementById('tutorial-next-btn');
    const skipBtn = document.getElementById('tutorial-skip-btn');
    const iconWrapper = document.getElementById('tutorial-icon');
    const dotsContainer = document.getElementById('tutorial-dots');

    function buildDots() {
        dotsContainer.innerHTML = '';
        STEPS.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'tutorial-dot';
            if (i === currentStep) dot.classList.add('active');
            else if (i < currentStep) dot.classList.add('completed');
            dotsContainer.appendChild(dot);
        });
    }

    function update() {
        const step = STEPS[currentStep];
        iconWrapper.innerHTML = step.icon;
        title.textContent = step.title;
        indicator.textContent = `Step ${currentStep + 1} of ${STEPS.length}`;
        text.textContent = step.text;
        nextBtn.textContent = currentStep === STEPS.length - 1 ? 'Start Exploring' : 'Next';
        buildDots();
    }

    function close() {
        overlay.classList.remove('active');
        onComplete();
    }

    nextBtn.addEventListener('click', () => {
        currentStep++;
        if (currentStep >= STEPS.length) close();
        else update();
    });

    skipBtn.addEventListener('click', close);

    // Public: show the tutorial
    return {
        show() {
            currentStep = 0;
            update();
            overlay.classList.add('active');
        }
    };
}
