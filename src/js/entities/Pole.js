import Scene from '../core/scene';
import { DEFAULTS } from '../data/constants'

/**
 * This class represents a pole structure
 */
export default class Pole {
    constructor(name = 'pole', height = 15) {
        const mesh = BABYLON.MeshBuilder.CreateBox(name, {width: 0.5, height, depth: 0.5}, Scene);
        mesh.checkCollisions = true;
        this.mesh = mesh;
    }
}