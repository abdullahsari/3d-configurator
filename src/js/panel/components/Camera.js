import Config from '../../Configurator';

/**
 * This class represents the camera choice section
 */
export default class Camera {
    constructor() {
        this.bindEvents();
    }

    /**
     * Attaches events to various controls
     */
    bindEvents() {
        const control = document.querySelector('#camera select');
        control.addEventListener('change', () => {
            this.changeCam(control.value);
        });
    }

    /**
     * Changes the camera mode
     * @param mode The selected mode
     */
    changeCam(mode) {
        Config.setCameraMode(mode);
    }
}