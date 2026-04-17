/**
 * Thumbnail gallery panel
 */
import { SCENES } from '../data/scenes.js';

const galleryToggle = document.getElementById('gallery-toggle');
const galleryPanel = document.getElementById('gallery-panel');
const galleryGrid = document.getElementById('gallery-grid');

export function initGallery(virtualTour) {
    // Build gallery items
    SCENES.forEach(scene => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.id = scene.id;
        item.innerHTML = `
            <img src="${scene.thumbnail}" alt="${scene.name}" loading="lazy" />
            <div class="gallery-label">${scene.name}</div>
        `;
        item.addEventListener('click', () => {
            virtualTour.setCurrentNode(scene.id);
            galleryPanel.classList.remove('active');
            galleryToggle.classList.remove('panel-open');
        });
        galleryGrid.appendChild(item);
    });

    galleryToggle.addEventListener('click', () => {
        galleryPanel.classList.toggle('active');
        galleryToggle.classList.toggle('panel-open');
    });
}

export function updateGalleryHighlight(nodeId) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.toggle('current', item.dataset.id === nodeId);
    });
}

export function closeGallery() {
    galleryPanel.classList.remove('active');
    galleryToggle.classList.remove('panel-open');
}

export function isGalleryOpen() {
    return galleryPanel.classList.contains('active');
}

export { galleryPanel, galleryToggle };
