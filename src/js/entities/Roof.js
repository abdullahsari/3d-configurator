import Scene from '../core/scene';

const DEFAULT_Y = 10;

/**
 * This class represents a roof structure
 */
export default class Roof {
    constructor(name = 'roof') {
        const mesh = BABYLON.MeshBuilder.CreateBox(name, {width: 10, height: 0.25, depth: 15}, Scene);
        mesh.position.y = DEFAULT_Y;
    }
}