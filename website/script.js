document.getElementById("greetButton").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("message");

    if (name) {
        message.textContent = `Hello ${name}, welcome to the ADT DevOps module!`;
    } else {
        message.textContent = "Please enter your name.";
    }
});