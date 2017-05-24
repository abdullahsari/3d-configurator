////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIOUS UTILITY METHODS /////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Keeps clicking until mouse is released
export const clickAndHold = (action, params = []) => {
    const loop = setInterval(() => {action(...params)}, 50);
    const undo = document.body.addEventListener('mouseup', () => {
        clearInterval(loop);
        document.body.removeEventListener('mouseup', undo);
    });
};