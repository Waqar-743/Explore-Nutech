/**
 * Minimap — Canvas-based with radar cone and click-to-navigate
 */
import { SCENES, MAP_CONNECTIONS } from '../data/scenes.js';

let currentNodeId = '1';
let viewerRef = null;
let virtualTourRef = null;

const canvas = document.getElementById('minimap-canvas');
const ctx = canvas.getContext('2d');
const minimapToggle = document.getElementById('minimap-toggle');
const minimapPanel = document.getElementById('minimap');

function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width - 28;
    canvas.height = rect.height - 34;
}

function draw() {
    resize();
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const scaleX = w / 240;
    const scaleY = h / 200;

    // Draw connection lines
    ctx.strokeStyle = 'rgba(17, 88, 77, 0.4)';
    ctx.lineWidth = 2;
    MAP_CONNECTIONS.forEach(([a, b]) => {
        const sa = SCENES.find(s => s.id === a);
        const sb = SCENES.find(s => s.id === b);
        if (!sa || !sb) return;
        ctx.beginPath();
        ctx.moveTo(sa.mapPos.x * scaleX, sa.mapPos.y * scaleY);
        ctx.lineTo(sb.mapPos.x * scaleX, sb.mapPos.y * scaleY);
        ctx.stroke();
    });

    // Draw nodes
    SCENES.forEach(scene => {
        const x = scene.mapPos.x * scaleX;
        const y = scene.mapPos.y * scaleY;
        const isCurrent = scene.id === currentNodeId;

        if (isCurrent && viewerRef) {
            // Draw radar cone
            const yaw = viewerRef.getPosition().yaw;
            const coneAngle = Math.PI / 4;
            const coneLength = 28;
            ctx.fillStyle = 'rgba(17, 88, 77, 0.2)';
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, coneLength, yaw - coneAngle / 2, yaw + coneAngle / 2);
            ctx.closePath();
            ctx.fill();

            ctx.shadowColor = '#11584D';
            ctx.shadowBlur = 12;
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(x, y, isCurrent ? 8 : 6, 0, Math.PI * 2);
        ctx.fillStyle = isCurrent ? '#11584D' : 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
        ctx.strokeStyle = isCurrent ? '#fff' : 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = isCurrent ? 2 : 1;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = isCurrent ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        ctx.font = `${isCurrent ? 'bold' : 'normal'} ${isCurrent ? '10px' : '9px'} Inter, sans-serif`;
        ctx.textAlign = 'center';
        // Show short name for 3.5
        const label = scene.id === '3.5' ? '3½' : scene.id;
        ctx.fillText(label, x, y - 12);
    });
}

export function initMinimap(viewer, virtualTour) {
    viewerRef = viewer;
    virtualTourRef = virtualTour;

    minimapToggle.addEventListener('click', () => {
        minimapPanel.classList.toggle('active');
        minimapToggle.classList.toggle('map-open');
        if (minimapPanel.classList.contains('active')) draw();
    });

    // Click to navigate
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const scaleX = canvas.width / 240;
        const scaleY = canvas.height / 200;

        for (const scene of SCENES) {
            const x = scene.mapPos.x * scaleX;
            const y = scene.mapPos.y * scaleY;
            const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
            if (dist < 14) {
                virtualTourRef.setCurrentNode(scene.id);
                break;
            }
        }
    });

    // Redraw on position change
    viewer.addEventListener('position-updated', () => {
        if (minimapPanel.classList.contains('active')) draw();
    });
}

export function updateMinimapNode(nodeId) {
    currentNodeId = nodeId;
    if (minimapPanel.classList.contains('active')) draw();
}

export function drawMinimap() {
    draw();
}
