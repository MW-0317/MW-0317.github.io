// main();
window.onload = main;
// document.addEventListener('DOMContentLoaded', main, false);

function mouse_over(event)
{
    console.log("ENTER");
    const hover_element = document.getElementById("hover_element");
    hover_element.style.width = "20vw";
    hover_element.style.height = "80vh";
    // hover_element.innerHTML = "<h1>TEST</h1>"
    hover_element.innerHTML = "<iframe style=\"width: 100%; height: 100%\" src=\"" + event.target.href + "\"></iframe>"
    // event.target.href or smth
}

function mouse_exit(event)
{
    console.log("EXIT");
    const hover_element = document.getElementById("hover_element");
    // hover_element.style.width = "0px";
    // hover_element.style.height = "0px";
    // hover_element.innerHTML = "";
}

//
// start here
//
function main() {
    const links = document.getElementsByTagName("a");
    console.log(links);

    for (var i = 0; i < links.length; i++)
    {
        const dir_list = links[i].href.split("/");
        if (!dir_list[dir_list.length - 1].startsWith("_")){
            continue;
        }
        links[i].addEventListener("mouseover", mouse_over, false);
        links[i].addEventListener("mouseout", mouse_exit, false);
        links[i].style = "color: var(--M);";
    }

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