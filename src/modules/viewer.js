/**
 * Viewer initialization — builds PSV nodes and creates the viewer instance
 */
import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { SCENES } from '../data/scenes.js';
import { createNavHotspotElement, createInfoHotspotHTML } from './hotspots.js';

/** Convert SCENES array into PSV virtual tour nodes */
function buildNodes() {
    return SCENES.map(scene => {
        const markers = [];

        // Info markers
        scene.infoMarkers.forEach((info, i) => {
            markers.push({
                id: `info-${scene.id}-${i}`,
                position: { yaw: info.yaw, pitch: info.pitch },
                html: createInfoHotspotHTML(),
                size: { width: 24, height: 24 },
                anchor: 'center center',
                tooltip: { content: info.text, position: 'top center', trigger: 'click' },
                data: { type: 'info' }
            });
        });

        return {
            id: scene.id,
            panorama: scene.panorama,
            thumbnail: scene.thumbnail,
            name: scene.name,
            caption: `<strong>${scene.name}</strong> &mdash; ${scene.description}`,
            markers,
            links: scene.links.map(link => ({
                nodeId: link.nodeId,
                position: { yaw: link.position.yaw, pitch: link.position.pitch },
                arrowStyle: {
                    element: createNavHotspotElement(),
                    size: { width: 32, height: 32 }
                }
            }))
        };
    });
}

/** Create and return the viewer + plugin references */
export function initViewer() {
    const viewer = new Viewer({
        container: document.querySelector('#viewer'),
        loadingTxt: '',
        touchmoveTwoFingers: false,
        mousewheelCtrlKey: false,
        defaultYaw: 0,
        defaultPitch: 0,
        defaultZoomLvl: 0,
        navbar: false,
        plugins: [
            MarkersPlugin.withConfig({}),
            AutorotatePlugin.withConfig({
                autorotateSpeed: '0.5rpm',
                autostartDelay: null,
                autostartOnIdle: false,
                autorotatePitch: '0deg',
            }),
            VirtualTourPlugin.withConfig({
                renderMode: '2d',
                nodes: buildNodes(),
                startNodeId: '1',
                preload: true,
                transitionOptions: {
                    showLoader: false,
                    speed: '30rpm',
                    effect: 'fade'
                }
            })
        ]
    });

    return {
        viewer,
        virtualTour: viewer.getPlugin(VirtualTourPlugin),
        markersPlugin: viewer.getPlugin(MarkersPlugin),
        autorotate: viewer.getPlugin(AutorotatePlugin)
    };
}
