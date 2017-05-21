import Scene from '../core/scene';
import { DIRECTIONS, GROUND } from '../data/constants';

/**
 * Handles the directional lighting for the scene
 */
export default class Sun {
    constructor(direction = DIRECTIONS.NORTH) {

        // create small sphere to visualize the origin of the light source
        const material = new BABYLON.StandardMaterial('sunMat', Scene);
        material.emissiveColor = new BABYLON.Color3.Yellow();
        const mesh = BABYLON.Mesh.CreateSphere('sphere', 16, 1, Scene);
        mesh.position.y = 50;
        mesh.material = material;
        mesh.isPickable = false;
        this.mesh = mesh;

        // create actual light source
        this.light = new BABYLON.DirectionalLight('sunlight', new BABYLON.Vector3(0, -1, 0), Scene);
        this.light.intensity = 0.5;

        // move to default position
        this.move(direction);
    }

    /**
     * Makes the sun mesh and lighting position move within the scene
     * @param direction The cardinal direction the sun has to move to
     */
    move(direction) {
        const radius = GROUND.SIZE * 0.75,
            y = -1;
        let angle;
        switch (direction) {
            case DIRECTIONS.NORTH:
            default:
                angle = 0;
                this.light.direction = new BABYLON.Vector3(-1, y, 0);
                break;
            case DIRECTIONS.NORTH_EAST:
                angle = BABYLON.Tools.ToRadians(-45);
                this.light.direction = new BABYLON.Vector3(-1, y, 1);
                break;
            case DIRECTIONS.EAST:
                angle = BABYLON.Tools.ToRadians(-90);
                this.light.direction = new BABYLON.Vector3(0, y, 1);
                break;
            case DIRECTIONS.SOUTH_EAST:
                angle = BABYLON.Tools.ToRadians(-135);
                this.light.direction = new BABYLON.Vector3(1, y, 1);
                break;
            case DIRECTIONS.SOUTH:
                angle = BABYLON.Tools.ToRadians(-180);
                this.light.direction = new BABYLON.Vector3(1, y, 0);
                break;
            case DIRECTIONS.SOUTH_WEST:
                angle = BABYLON.Tools.ToRadians(-225);
                this.light.direction = new BABYLON.Vector3(1, y, -1);
                break;
            case DIRECTIONS.WEST:
                angle = BABYLON.Tools.ToRadians(-270);
                this.light.direction = new BABYLON.Vector3(0, y, -1);
                break;
            case DIRECTIONS.NORTH_WEST:
                angle = BABYLON.Tools.ToRadians(-315);
                this.light.direction = new BABYLON.Vector3(-1, y, -1);
                break;
        }
        const points = Utils.circleEquation(radius, angle);
        this.mesh.position.x = points[0];
        this.mesh.position.z = points[1];
    }
}