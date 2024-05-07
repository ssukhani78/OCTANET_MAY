
document.addEventListener('DOMContentLoaded', function () {
    const Rolex = document.querySelectorAll(".navbar li")[0];
    Rolex.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const rolex_sec = document.querySelector("#part_1");
        rolex_sec.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the dog section
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const Senor = document.querySelectorAll(".navbar li")[1];
    Senor.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const Senor_sec = document.querySelector("#part_2");
        Senor_sec.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the dog section
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const PP = document.querySelectorAll(".navbar li")[2];
    PP.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const Patek_Philippe_sec = document.querySelector("#part_3");
        Patek_Philippe_sec.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to the dog section
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const PP = document.querySelectorAll(".navbar li")[3];
    PP.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const Patek_Philippe_sec = document.querySelector("#part_4");
        Patek_Philippe_sec.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to the dog section
    });
});
