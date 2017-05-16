// Debug mode
export const DEBUG = true;

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

// Properties regarding meshes
export const DEFAULTS = Object.freeze({
    MESH_HEIGHT: 20
});