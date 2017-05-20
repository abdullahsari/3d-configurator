////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIOUS UTILITY METHODS /////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Converts an angle in degrees to radians
export const degreesToRadians = degrees => degrees * Math.PI / 180;

// Calculates a point on a circle's circumference with (0, 0) as the origin of that circle
export const circleEquation = (radius, angle) => [radius * Math.cos(angle), radius * Math.sin(angle)];

// Display error messages
export const displayError = message => {
    const div = document.createElement('div');
    div.classList.add('error');
    const p = document.createElement('p');
    p.innerHTML = message;
    div.appendChild(p);
    document.body.appendChild(div);
    setTimeout(() => {
        document.body.removeChild(div);
    }, 2000);
};