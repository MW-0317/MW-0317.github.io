// main();
window.onload = main;

//
// start here
//
function main() {
    return;
    const canvas = document.getElementById("gl-canvas");
    //   const canvas = document.createElement('canvas');
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert(
        "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
    }

    gl.clearColor(1.0, 1.0, 1.0, 0.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}