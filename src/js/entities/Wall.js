import Scene from '../core/scene';
import { MESH_OUTLINE_WIDTH } from '../data/constants';

/**
 * This class represents a wall structure
 */
export default class Wall {
    constructor(name = 'wall', width = 25, height = 10, depth = 0.5) {
        const mesh = BABYLON.MeshBuilder.CreateBox(name, {width, height, depth}, Scene);
        mesh.material = new BABYLON.StandardMaterial('wallMat', Scene);
        mesh.position.y = height / 2;
        mesh.checkCollisions = true;

        // Handle events when mouse moves over the mesh
        mesh.actionManager = new BABYLON.ActionManager(Scene);
        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, this.onMouseOver));
        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, this.onMouseOut));
        this.mesh = mesh;
    }

    /**
     * Handles the mouse over event
     * @param mesh The mesh that was hovered over
     */
    onMouseOver(mesh) {
        if (mesh.meshUnderPointer !== null) {
            mesh.meshUnderPointer.renderOutline = true;
            mesh.meshUnderPointer.outlineWidth = MESH_OUTLINE_WIDTH;
        }
    }

    /**
     * Handles the mouse out event
     * @param mesh The mesh that was previously hovered over
     */
    onMouseOut(mesh) {
        if (mesh.meshUnderPointer !== null) {
            mesh.meshUnderPointer.renderOutline = false;
        }
    }
}