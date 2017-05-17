import Scene from '../core/scene';
import { DEFAULTS } from '../data/constants';

/**
 * This class represents a wall structure
 */
export default class Wall {
    constructor(name = 'wall', width = 25, height = 10, depth = 0.5) {
        const mesh = BABYLON.MeshBuilder.CreateBox(name, {width, height, depth}, Scene);
        mesh.position.y = height / 2;
        mesh.checkCollisions = true;
        this.mesh = mesh;
    }
}