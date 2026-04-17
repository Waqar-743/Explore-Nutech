/**
 * Hotspot creation helpers — DOM elements for navigation and info markers
 */

/** Create a navigation hotspot DOM element (walking person icon) */
export function createNavHotspotElement() {
    const el = document.createElement('div');
    el.className = 'hotspot-nav';
    el.innerHTML = `<svg viewBox="0 0 24 24"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 6.5l2.1 4.9V23h2v-5.5l-2.1-5 .3-1.4c.8.9 2 1.6 3.3 1.9V15h2v-2.8c0-.7-.4-1.3-1-1.6l-2.3-1.2c-.3-.2-.7-.2-1.1-.2-.4 0-.8.1-1.1.3L9.2 11c-.5.3-.8.8-.8 1.4V15h2v-3z"/></svg>`;
    return el;
}

/** Create an info hotspot HTML string */
export function createInfoHotspotHTML() {
    return '<div class="hotspot-info">i</div>';
}
