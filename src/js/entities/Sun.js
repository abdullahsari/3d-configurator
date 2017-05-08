import Scene from '../core/Scene';
import { DIRECTIONS } from '../data/Constants';

export default class Sun {
    constructor() {

        // create small sphere to visualize the origin of the light source
        const material = new BABYLON.StandardMaterial('sunMat', Scene);
        material.emissiveColor = new BABYLON.Color3.Yellow();
        const mesh = BABYLON.Mesh.CreateSphere('sphere', 16, 1, Scene);
        mesh.position.y = 50;
        mesh.material = material;
        this.mesh = mesh;

        // create actual light source
        this.light = new BABYLON.DirectionalLight('sunlight', new BABYLON.Vector3(0, -1, 0), Scene);

        // move to default position
        this.move(DIRECTIONS.NORTH);
    }

    move(direction) {
        const radius = 75;
        let angle;
        switch (direction) {
            case DIRECTIONS.NORTH:
            default:
                angle = 0;
                break;
            case DIRECTIONS.NORTH_EAST:
                angle = Utils.degreesToRadians(45);
                break;
            case DIRECTIONS.EAST:
                angle = Utils.degreesToRadians(90);
                break;
            case DIRECTIONS.SOUTH_EAST:
                angle = Utils.degreesToRadians(135);
                break;
            case DIRECTIONS.SOUTH:
                angle = Utils.degreesToRadians(180);
                break;
            case DIRECTIONS.SOUTH_WEST:
                angle = Utils.degreesToRadians(225);
                break;
            case DIRECTIONS.WEST:
                angle = Utils.degreesToRadians(270);
                break;
            case DIRECTIONS.NORTH_WEST:
                angle = Utils.degreesToRadians(315);
                break;
        }
        const points = Utils.circleEquation(radius, angle);
        this.mesh.position.x = points[0];
        this.mesh.position.z = points[1];
        this.light.direction = new BABYLON.Vector3(-points[0], -1, -points[1])
    }
}