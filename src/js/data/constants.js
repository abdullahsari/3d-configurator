// Camera
export const CAMERA_LIMITS = Object.freeze({
    LOWER_RADIUS: 50,
    UPPER_RADIUS: 125,
    UPPER_BETA  : 1.5,
});

export const CAMERA_SETTINGS = Object.freeze({
    KEYS_UP       : 87, // W
    KEYS_LEFT     : 65, // A
    KEYS_DOWN     : 83, // S
    KEYS_RIGHT    : 68, // D
    SPEED         : 3,
    INERTIA       : 0.5,
    NG_SENSIBILITY: 1000
});

// Physics
export const GRAVITATIONAL_ACCELERATION = 9.81;

// Directories
export const TEXTURES_DIR = 'img/textures/';
export const SOUNDS_DIR = 'sound/';

// Ground
export const GROUND = Object.freeze({
    SIZE        : 250,
    SUBDIVISIONS: 10
});

// Cardinal directions
export const DIRECTIONS = Object.freeze({
    NORTH     : 'N',
    NORTH_EAST: 'NE',
    EAST      : 'E',
    SOUTH_EAST: 'SE',
    SOUTH     : 'S',
    SOUTH_WEST: 'SW',
    WEST      : 'W',
    NORTH_WEST: 'NW'
});

// Mesh related
export const MESH_TYPES = Object.freeze({
    WALL: 'WALL',
    POLE: 'POLE',
    ROOF: 'ROOF',
    DOOR: 'DOOR'
});

export const MESH_OUTLINE_WIDTH = 0.05;

export const STEP_AMOUNT = 0.25;

export const SCALE_AMOUNT = 0.05;