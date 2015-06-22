var gl;

function initGL(canvas) {
    try {
        gl = canvas.getContext("experimental-webgl");
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
    } catch (e) {
        alert("Error with getContext");
    }
    if (!gl) {
        alert("Could not initialize WebGL, sorry :-(");
    }
}
