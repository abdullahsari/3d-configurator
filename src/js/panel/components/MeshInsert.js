import Config from '../../Configurator';
import { MESH_TYPES } from '../../data/constants';
import debounce from 'debounce';

export default class MeshInsert {
    constructor() {
        this.selectControl = document.querySelector('#insert select');
        this.bindEvents();
    }

    bindEvents() {
        document.querySelector('#insert .btn-primary').addEventListener('click', debounce(() => { this.insertSelectedMesh() }, 250));
    }

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