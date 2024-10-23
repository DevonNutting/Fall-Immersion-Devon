// Everything in these brackets will trigger when the webpage is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get Modal Elements

    // Store the HTMLpop-up window into a variable
    const modal = document.getElementById("myModal");

    // Store the button that opens the pop-up in a variable
    const openModalButton = document.getElementById("openModal");

    // Store the button that closes the pop-up in a variable
    const closeModalButton = document.getElementById("closeModal");

    //Add Event Listener to open modal
    openModalButton.addEventListener("click", () => {
        // Make the pop-up appear
        modal.style.display = "block";
    });

    //Add Event Listener to close modal
    closeModalButton.addEventListener("click", () => {
        // Make the pop-up disappear
        modal.style.display = "none";
    });

    //Add Event Listener to close modal outside of modal content
    window.addEventListener("click", (event) => {
        if (event.target == modal) // If what we clicked is NOT the pop-up
        {
            // Make the pop-up disappear
            modal.style.display = "none";
        }
    });   
});
    
