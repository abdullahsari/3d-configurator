import Scene from '../core/scene';
import { TEXTURES_DIR } from '../data/constants';

const URL = {
    wood : `${TEXTURES_DIR}/wood/tilewood.jpg`,
    black: `${TEXTURES_DIR}/wood/black.jpg`
};
export default class Material {
    constructor() {
        const mats = new Map();
        mats.set('glass', this.glass());
        mats.set('wood', this.wood());
        mats.set('black', this.black());
        this.materials = mats;
    }

    /**
     * Returns the requested material
     * @param name The material name
     * @returns {V} Material
     */
    getMaterial(name) {
        const material = this.materials.get(name);
        if (!material) throw new Error('Invalid material key.');
        return material;
    }

    /**
     * Generates a glass material
     * @returns {BABYLON.StandardMaterial}
     */
    glass() {
        const mat = new BABYLON.StandardMaterial('glass', Scene);
        mat.alpha = 0.6;
        mat.backFaceCulling = true;
        mat.specularPower = 64;
        mat.useSpecularOverAlpha = true;
        mat.useAlphaFromDiffuseTexture = false;

        // Diffuse definitions
        mat.diffuseColor = new BABYLON.Color3(0.61, 0.84, 1.00);

        // Fresnel Parameters
        const mat_reflectionFresnel = new BABYLON.FresnelParameters();
        mat_reflectionFresnel.isEnabled = true;
        mat_reflectionFresnel.bias = 0.5;
        mat_reflectionFresnel.power = 1;
        mat_reflectionFresnel.leftColor = new BABYLON.Color3(0.49019607843137253, 0.8470588235294118, 1);
        mat_reflectionFresnel.rightColor = new BABYLON.Color3(0.1411764705882353, 0.6392156862745098, 1);
        mat.reflectionFresnelParameters = mat_reflectionFresnel;
        return mat;
    }

    /**
     * Generates a wood material
     * @returns {BABYLON.StandardMaterial}
     */
    wood() {
        const mat = new BABYLON.StandardMaterial('wood', Scene);
        mat.alpha = 1;
        mat.backFaceCulling = true;
        mat.specularPower = 64;
        mat.useSpecularOverAlpha = true;
        mat.useAlphaFromDiffuseTexture = false;

        // Diffuse definitions
        mat.diffuseColor = new BABYLON.Color3(1.00, 1.00, 1.00);

        // Texture Parameters
        const mat_diffuseTexture = new BABYLON.Texture(URL.wood, Scene);
        mat_diffuseTexture.uScale = 2;
        mat_diffuseTexture.vScale = 2;
        mat_diffuseTexture.coordinatesMode = 0;
        mat_diffuseTexture.uOffset = 0;
        mat_diffuseTexture.vOffset = 0;
        mat_diffuseTexture.uAng = 0;
        mat_diffuseTexture.vAng = 0;
        mat_diffuseTexture.level = 1;
        mat_diffuseTexture.coordinatesIndex = 0;
        mat_diffuseTexture.hasAlpha = false;
        mat_diffuseTexture.getAlphaFromRGB = false;
        mat.diffuseTexture = mat_diffuseTexture;
        return mat;
    }

    /**
     * Generates a black material
     * @returns {BABYLON.StandardMaterial}
     */
    black() {
        const mat = new BABYLON.StandardMaterial('wood', Scene);
        mat.alpha = 1;
        mat.backFaceCulling = true;
        mat.specularPower = 64;
        mat.useSpecularOverAlpha = true;
        mat.useAlphaFromDiffuseTexture = false;

        // Diffuse definitions
        mat.diffuseColor = new BABYLON.Color3(1.00, 1.00, 1.00);

        // Texture Parameters
        const mat_diffuseTexture = new BABYLON.Texture(URL.black, Scene);
        mat_diffuseTexture.uScale = 2;
        mat_diffuseTexture.vScale = 2;
        mat_diffuseTexture.coordinatesMode = 0;
        mat_diffuseTexture.uOffset = 0;
        mat_diffuseTexture.vOffset = 0;
        mat_diffuseTexture.uAng = 0;
        mat_diffuseTexture.vAng = 0;
        mat_diffuseTexture.level = 1;
        mat_diffuseTexture.coordinatesIndex = 0;
        mat_diffuseTexture.hasAlpha = false;
        mat_diffuseTexture.getAlphaFromRGB = false;
        mat.diffuseTexture = mat_diffuseTexture;
        return mat;
    }
}