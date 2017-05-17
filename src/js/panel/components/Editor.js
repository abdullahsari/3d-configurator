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
    }

    /**
     * Assigns the material to given mesh
     * @param mat The material name
     */
    newMaterial(mat) {
        Config.changeMaterial(mat);
    }
}