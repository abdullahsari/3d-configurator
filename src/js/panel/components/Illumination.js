import Config from '../../Configurator';

const BTN_CLASS = 'segment',
    ACTIVE_CLASS = 'orientation';

/**
 * Handles the lighting directions within the scene
 */
export default class Illumination {
    constructor() {
        this.directions = document.getElementsByClassName(BTN_CLASS);
        this.active = this.directions[0];
        this.bindEvents();
    }

    /**
     * Attach events to the UI control
     */
    bindEvents() {

        // add event listeners
        for (let btn of this.directions) {
            btn.addEventListener('click', () => {
                this.changeLightOrientation(btn);
            });
        }
    }

    /**
     * Changes the direction of the lighting according to the cardinal direction
     * @param node The chosen direction's button
     */
    changeLightOrientation(node) {

        // remove previous active orientation
        this.active.classList.remove(ACTIVE_CLASS);

        // set clicked orientation as active
        node.classList.add(ACTIVE_CLASS);
        this.active = node;

        // move sun in the scene
        Config.moveSun(node.dataset.direction);
    }
}