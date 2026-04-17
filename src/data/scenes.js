/**
 * NUTECH 360° Virtual Tour — Scene Configuration Data
 * Each scene: id, name, panorama, thumbnail, description, mapPos, links, infoMarkers
 */

import panorama0 from '../../images/0.jpg';
import panorama1 from '../../images/1.jpg';
import panorama2 from '../../images/2.jpg';
import panorama3 from '../../images/3.jpg';
import panorama35 from '../../images/3.5.jpg';
import panorama4 from '../../images/4.jpg';
import panorama5 from '../../images/5.jpg';
import panorama6 from '../../images/6.jpg';

import thumb0 from '../../images/thumbs/0.jpg';
import thumb1 from '../../images/thumbs/1.jpg';
import thumb2 from '../../images/thumbs/2.jpg';
import thumb3 from '../../images/thumbs/3.jpg';
import thumb35 from '../../images/thumbs/3.5.jpg';
import thumb4 from '../../images/thumbs/4.jpg';
import thumb5 from '../../images/thumbs/5.jpg';
import thumb6 from '../../images/thumbs/6.jpg';

export const SCENES = [
    {
        id: '0',
        name: 'Approach Road',
        panorama: panorama0,
        thumbnail: thumb0,
        description: 'The main approach road leading to the NUTECH campus entrance.',
        mapPos: { x: 30, y: 110 },
        links: [
            { nodeId: '1', position: { yaw: '-40.9deg', pitch: '3.2deg' }, label: 'Main Gate' }
        ],
        infoMarkers: [
            { yaw: '90deg', pitch: '5deg', text: 'Public transport stop nearby. City buses and vans connect to Rawalpindi and Islamabad.' },
            { yaw: '-100deg', pitch: '10deg', text: 'Power distribution infrastructure serving the NUTECH campus area.' }
        ]
    },
    {
        id: '1',
        name: 'Main Gate (NUTECH CTTI)',
        panorama: panorama1,
        thumbnail: thumb1,
        description: 'The main entrance gate of NUTECH CTTI with Pakistan flags on display.',
        mapPos: { x: 70, y: 110 },
        links: [
            { nodeId: '0', position: { yaw: '-60.0deg', pitch: '2.1deg' }, label: 'Approach Road' },
            { nodeId: '2', position: { yaw: '25.9deg', pitch: '5.9deg' }, label: 'Admin Block' }
        ],
        infoMarkers: [
            { yaw: '47deg', pitch: '12deg', text: 'NUTECH CTTI Main Gate - National University of Technology. Established for excellence in engineering and technology.' },
            { yaw: '120deg', pitch: '03deg', text: 'Visitor parking area. Campus security office is located to the right of the gate.' }
        ]
    },
    {
        id: '2',
        name: 'Admin Block Area',
        panorama: panorama2,
        thumbnail: thumb2,
        description: 'The administrative block area with red-brick architecture and paved walkways.',
        mapPos: { x: 115, y: 95 },
        links: [
            { nodeId: '1', position: { yaw: '-145.9deg', pitch: '10.5deg' }, label: 'Main Gate' },
            { nodeId: '3', position: { yaw: '-71.6deg', pitch: '5.2deg' }, label: 'Auditorium' },
            { nodeId: '6', position: { yaw: '20.4deg', pitch: '6.2deg' }, label: 'Green Lawn' }
        ],
        infoMarkers: [
            { yaw: '50deg', pitch: '10deg', text: 'Administration and faculty offices. The brick facade is a signature of the NUTECH campus design.' },
            { yaw: '-40deg', pitch: '5deg', text: 'Directional signage for various campus facilities including labs, library, and cafeteria.' }
        ]
    },
    {
        id: '3',
        name: 'Auditorium & Central Area',
        panorama: panorama3,
        thumbnail: thumb3,
        description: 'Central campus area featuring the large covered auditorium and multi-story academic block.',
        mapPos: { x: 155, y: 65 },
        links: [
            { nodeId: '3.5', position: { yaw: '3.0deg', pitch: '10.5deg' }, label: 'Central Courtyard' },
            { nodeId: '2', position: { yaw: '110.5deg', pitch: '5.7deg' }, label: 'Admin Block' }
        ],
        infoMarkers: [
            { yaw: '20deg', pitch: '15deg', text: 'Main Auditorium - Hosts university events, convocations, and guest lectures. Capacity: 1500+.' },
            { yaw: '-40deg', pitch: '10deg', text: 'Multi-story academic building housing lecture halls and computer labs.' }
        ]
    },
    {
        id: '3.5',
        name: 'Central Courtyard',
        panorama: panorama35,
        thumbnail: thumb35,
        description: 'The central courtyard area connecting the auditorium to the Khalid Block academic wing.',
        mapPos: { x: 172, y: 52 },
        links: [
            { nodeId: '3', position: { yaw: '15.92deg', pitch: '7.56deg' }, label: 'Auditorium' },
            { nodeId: '4', position: { yaw: '205.27deg', pitch: '8.69deg' }, label: 'Khalid Block' }
        ],
        infoMarkers: [
            { yaw: '0deg', pitch: '15deg', text: 'Central courtyard connecting academic blocks. A popular meeting point for students between classes.' },
            { yaw: '150deg', pitch: '10deg', text: 'Covered walkway providing sheltered access between campus buildings.' }
        ]
    },
    {
        id: '4',
        name: 'Khalid Block',
        panorama: panorama4,
        thumbnail: thumb4,
        description: 'Khalid Block - Modern academic building with distinctive curved architecture.',
        mapPos: { x: 190, y: 40 },
        links: [
            { nodeId: '3.5', position: { yaw: '-140.5deg', pitch: '2.9deg' }, label: 'Central Courtyard' },
            { nodeId: '5', position: { yaw: '58.6deg', pitch: '14.7deg' }, label: 'Main Building' }
        ],
        infoMarkers: [
            { yaw: '05deg', pitch: '15deg', text: 'Khalid Block - Named after a distinguished military leader. Houses engineering departments and research labs.' },
            { yaw: '-120deg', pitch: '-10deg', text: 'Outdoor seating area and campus courtyard. Popular spot for students between classes.' }
        ]
    },
    {
        id: '5',
        name: 'Main Building & Gardens',
        panorama: panorama5,
        thumbnail: thumb5,
        description: 'The NUTECH main building entrance with beautifully landscaped gardens.',
        mapPos: { x: 200, y: 110 },
        links: [
            { nodeId: '4', position: { yaw: '-65.5deg', pitch: '4.0deg' }, label: 'Khalid Block' },
            { nodeId: '6', position: { yaw: '145.8deg', pitch: '1.5deg' }, label: 'Green Lawn' }
        ],
        infoMarkers: [
            { yaw: '-120deg', pitch: '10deg', text: 'NUTECH Main Building - Administrative headquarters and the Vice Chancellor\'s office.' },
            { yaw: '80deg', pitch: '28deg', text: 'Brick clock tower - A campus landmark visible from the main road. Houses the campus bell.' }
        ]
    },
    {
        id: '6',
        name: 'Green Lawn & Library',
        panorama: panorama6,
        thumbnail: thumb6,
        description: 'Expansive green lawn area with the academic building and clock tower in the background.',
        mapPos: { x: 170, y: 160 },
        links: [
            { nodeId: '2', position: { yaw: '120deg', pitch: '7.0deg' }, label: 'Admin Block' },
            { nodeId: '5', position: { yaw: '-110.2deg', pitch: '1.8deg' }, label: 'Main Building' }
        ],
        infoMarkers: [
            { yaw: '-20deg', pitch: '12deg', text: 'National University of Technology - Main academic block. Offers programs in Engineering, IT, and Management.' },
            { yaw: '-160deg', pitch: '-5deg', text: 'Recreational green space used for sports events, outdoor activities, and annual festivals.' }
        ]
    }
];

/** Minimap connection paths between scene nodes */
export const MAP_CONNECTIONS = [
    ['0', '1'],
    ['1', '2'],
    ['2', '3'],
    ['3', '3.5'],
    ['3.5', '4'],
    ['4', '5'],
    ['5', '6'],
    ['2', '6']
];
