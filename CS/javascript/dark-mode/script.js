function darkMode() {
    // Toggle the screen white/black
    // Toggle text color white/black

    // Get the body element
    const body = document.body;
    
    // if the screen is white...
    if (body.style.backgroundColor == "white") {
        // ...change the backgorund color to black
        body.style.backgroundColor = "black";
        // ...change the text color to white
        body.style.color = "white";
    } else {
        // ...change the backgorund color to white
        body.style.backgroundColor = "white";
        // ...change the text color to black
        body.style.color = "black";
    }
}
