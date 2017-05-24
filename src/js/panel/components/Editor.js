import Config from '../../Configurator';

/**
 * This class represents the mesh editor
 */
export default class Editor {
    constructor() {
        this.bindEvents();
    }

    /**
     * Attaches events to various controls
     */
    bindEvents() {

        // Wood material
        document.getElementById('wood').addEventListener('click', () => { this.newMaterial('wood') });

        // Black material
        document.getElementById('black').addEventListener('click', () => { this.newMaterial('black') });

        // Glass material
        document.getElementById('glass').addEventListener('click', () => { this.newMaterial('glass') });

        // Remove mesh
        document.getElementById('remove').addEventListener('click', () => { this.remove() });

        // Rotate mesh
        document.getElementById('rotate').addEventListener('click', () => { this.rotate() });

        // Translate X
        document.getElementById('minX').addEventListener('mousedown', () => { Utils.clickAndHold(this.translate, ['x', false]) });
        document.getElementById('plusX').addEventListener('mousedown', () => { Utils.clickAndHold(this.translate, ['x', true]) });

        // Translate Y
        document.getElementById('minY').addEventListener('mousedown', () => { Utils.clickAndHold(this.translate, ['y', false]) });
        document.getElementById('plusY').addEventListener('mousedown', () => { Utils.clickAndHold(this.translate, ['y', true]) });

        // Translate Z
        document.getElementById('minZ').addEventListener('mousedown', () => { Utils.clickAndHold(this.translate, ['z', false]) });
        document.getElementById('plusZ').addEventListener('mousedown', () => { Utils.clickAndHold(this.translate, ['z', true]) });

        // Scale X
        document.getElementById('sminX').addEventListener('mousedown', () => { Utils.clickAndHold(this.scale, ['x', false]) });
        document.getElementById('splusX').addEventListener('mousedown', () => { Utils.clickAndHold(this.scale, ['x', true]) });

        // Scale Y
        document.getElementById('sminY').addEventListener('mousedown', () => { Utils.clickAndHold(this.scale, ['y', false]) });
        document.getElementById('splusY').addEventListener('mousedown', () => { Utils.clickAndHold(this.scale, ['y', true]) });

        // Scale Z
        document.getElementById('sminZ').addEventListener('mousedown', () => { Utils.clickAndHold(this.scale, ['z', false]) });
        document.getElementById('splusZ').addEventListener('mousedown', () => { Utils.clickAndHold(this.scale, ['z', true]) });
    }

    /**
     * Assigns the material to given mesh
     * @param mat The material name
     */
    newMaterial(mat) {
        try {
            Config.changeMaterial(mat);
        } catch (err) {
            Utils.displayError(err.message);
        }
    }

    /**
     * Commands the configurator to remove the selected mesh
     */
    remove() {
        Config.removeMesh();
    }

    /**
     * Commands the configurator to rotate the selected mesh
     */
    rotate() {
        Config.rotateMesh();
    }

    /**
     * Commands the configurator to scale a mesh
     * @param axis The axis the mesh has to be translated along
     * @param boolean Translate in positive or negative direction (true/false)
     */
    scale(axis, boolean) {
        Config.scaleMesh(axis, boolean);
    }

    /**
     * Commands the configurator to translate the selected mesh
     * @param axis The axis the mesh has to be translated along
     * @param positive Translate in positive or negative direction (true/false)
     */
    translate(axis, positive) {
        try {
            Config.translateMesh(axis, positive);
        } catch (err) {
            Utils.displayError(err.message);
        }
    }
}