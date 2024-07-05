document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const input = document.querySelector(".input");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.textContent === "AC") {
                input.value = "";
            } else if (button.textContent === "DEL") {
                input.value = input.value.slice(0, -1);
            } else if (button.textContent === "=") {
                try {
                    input.value = eval(input.value);
                } catch {
                    input.value = "Error";
                }
            } else {
                input.value += button.textContent;
            }
        });
    });
});


