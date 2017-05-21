import Config from '../../Configurator';
import { MESH_TYPES } from '../../data/constants';
import debounce from 'debounce';

/**
 * This class represents the mesh insert section
 */
export default class MeshInsert {
    constructor() {
        this.selectControl = document.querySelector('#insert select');
        this.bindEvents();
    }

    /**
     * Attaches events to various controls
     */
    bindEvents() {
        document.querySelector('#insert .btn-primary').addEventListener('click', debounce(() => { this.insertSelectedMesh() }, 250));
    }

    /**
     * According to the selected mesh type, a new mesh is inserted into the scene
     */
    insertSelectedMesh() {
        const entityName = this.selectControl.value;
        switch (entityName.toUpperCase()) {
            case MESH_TYPES.WALL:
                Config.addWall();
                break;
            case MESH_TYPES.POLE:
                Config.addPole();
                break;
            case MESH_TYPES.ROOF:
                Config.addRoof();
                break;
            case MESH_TYPES.DOOR:
                Config.addDoor();
                break;
            default:
                Utils.displayError('Invalid mesh type.');
                break;
        }
    }
}