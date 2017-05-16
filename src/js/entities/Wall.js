import Scene from '../core/scene';
import { DEFAULTS } from '../data/constants';

export default class Wall {
    constructor(width = 25, height = 10, depth = 0.5) {
        const mesh = BABYLON.MeshBuilder.CreateBox('wall', {width, height, depth, updatable: true}, Scene);
        mesh.position.y = height / 2;
        mesh.checkCollisions = true;
        this.mesh = mesh;
    }
}