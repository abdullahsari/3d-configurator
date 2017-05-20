import Config from '../../Configurator';

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
        document.getElementById('minX').addEventListener('click', () => { this.translate('x', false) });
        document.getElementById('plusX').addEventListener('click', () => { this.translate('x', true) });

        // Translate Y
        document.getElementById('minY').addEventListener('click', () => { this.translate('y', false) });
        document.getElementById('plusY').addEventListener('click', () => { this.translate('y', true) });

        // Translate Z
        document.getElementById('minZ').addEventListener('click', () => { this.translate('z', false) });
        document.getElementById('plusZ').addEventListener('click', () => { this.translate('z', true) });

        // Scale X
        document.getElementById('sminX').addEventListener('click', () => { this.scale('x', false) });
        document.getElementById('splusX').addEventListener('click', () => { this.scale('x', true) });

        // Scale Y
        document.getElementById('sminY').addEventListener('click', () => { this.scale('y', false) });
        document.getElementById('splusY').addEventListener('click', () => { this.scale('y', true) });

        // Scale Z
        document.getElementById('sminZ').addEventListener('click', () => { this.scale('z', false) });
        document.getElementById('splusZ').addEventListener('click', () => { this.scale('z', true) });
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