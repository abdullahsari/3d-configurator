import Config from '../../Configurator';

export default class Camera {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        const control = document.querySelector('#camera select');
        control.addEventListener('change', () => {
            this.changeCam(control.value);
        });
    }

    changeCam(mode) {
        Config.setCameraMode(mode);
    }
}