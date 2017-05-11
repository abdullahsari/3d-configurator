import Config from '../../Configurator';

const BTN_CLASS = 'segment',
    ACTIVE_CLASS = 'orientation';
export default class Illumination {
    constructor() {
        this.directions = document.getElementsByClassName(BTN_CLASS);
        this.active = this.directions[0];
        this.bindEvents();
    }

    bindEvents() {

        // add event listeners
        for (let btn of this.directions) {
            btn.addEventListener('click', () => {
                this.changeLightOrientation(btn);
            });
        }
    }

    changeLightOrientation(node) {

        // remove previous active orientation
        this.active.classList.remove(ACTIVE_CLASS);

        // set clicked orientation as active
        node.classList.add(activeClass);
        this.active = node;

        // move sun in the scene
        Config.moveSun(node.dataset.direction);
    }
}