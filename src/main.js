/**
 * NUTECH 360° Virtual Tour — Main Entry Point
 * Orchestrates all modules
 */

// ===== Styles =====
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';
import './styles/base.css';
import './styles/welcome.css';
import './styles/tutorial.css';
import './styles/minimap.css';
import './styles/gallery.css';
import './styles/hotspots.css';
import './styles/responsive.css';

// ===== Modules =====
import { SCENES } from './data/scenes.js';
import { initViewer } from './modules/viewer.js';
import { initWelcome } from './modules/welcome.js';
import { initTutorial } from './modules/tutorial.js';
import { initMinimap, updateMinimapNode } from './modules/minimap.js';
import { initGallery, updateGalleryHighlight, closeGallery, isGalleryOpen, galleryPanel, galleryToggle } from './modules/gallery.js';
import { initAutorotate } from './modules/autorotate.js';

// ===== State =====
let currentNodeId = '1';

function getCurrentSceneData() {
    return SCENES.find(s => s.id === currentNodeId);
}

// ===== Initialize Viewer =====
const { viewer, virtualTour, markersPlugin, autorotate } = initViewer();

// ===== Scene Label =====
const sceneLabel = document.getElementById('scene-label');
function updateSceneLabel(scene) {
    if (scene) {
        sceneLabel.innerHTML = `📍 ${scene.name}`;
        sceneLabel.classList.add('changing');
        setTimeout(() => sceneLabel.classList.remove('changing'), 400);
    }
}

// ===== Activate UI Elements =====
function activateUI() {
    document.getElementById('minimap-toggle').classList.add('active');
    document.getElementById('gallery-toggle').classList.add('active');
    sceneLabel.classList.add('active');
    updateSceneLabel(getCurrentSceneData());
}

// ===== Tutorial =====
const tutorial = initTutorial(activateUI);

// ===== Welcome =====
initWelcome(() => tutorial.show());

// ===== Minimap =====
initMinimap(viewer, virtualTour);

// ===== Gallery =====
initGallery(virtualTour);

// ===== Autorotate =====
const autorotateCtrl = initAutorotate(viewer, autorotate);

// ===== Loading Spinner on Nav Click =====
viewer.container.addEventListener('click', (e) => {
    const nav = e.target.closest('.hotspot-nav');
    if (nav) nav.classList.add('loading');
});

viewer.addEventListener('panorama-loaded', () => {
    document.querySelectorAll('.hotspot-nav.loading').forEach(el => el.classList.remove('loading'));
});

// ===== Node Change Event =====
virtualTour.addEventListener('node-changed', ({ node }) => {
    currentNodeId = node.id;
    const scene = getCurrentSceneData();
    updateSceneLabel(scene);
    updateGalleryHighlight(node.id);
    updateMinimapNode(node.id);
    autorotateCtrl.onSceneChange();
});

// ===== Close Panels on Outside Click =====
const minimapPanel = document.getElementById('minimap');
const minimapToggle = document.getElementById('minimap-toggle');

document.addEventListener('click', (e) => {
    if (isGalleryOpen() && !galleryPanel.contains(e.target) && e.target !== galleryToggle) {
        closeGallery();
    }
    if (minimapPanel.classList.contains('active') && !minimapPanel.contains(e.target) && e.target !== minimapToggle) {
        minimapPanel.classList.remove('active');
        minimapToggle.classList.remove('map-open');
    }
});
