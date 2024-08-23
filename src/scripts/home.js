import "./../styles/Home.css" ;

function loadHomeContent () {
    const content = document.querySelector("#content");
    const button = document.querySelector("button#Home");
    button.classList.add("active");

    const info = document.createElement("div");
    info.classList.add("Info");

    const Heading = document.createElement("h1");
    Heading.classList.add("clr");
    Heading.textContent = "Welcome to Hotel Pakwan";
    info.appendChild(Heading);

    const Heading2 = document.createElement("h1");
    Heading2.textContent = "We Serve the Quality of food.";
    info.appendChild(Heading2);

    const btn = document.createElement("button");
    btn.classList.add("Booking");
    btn.textContent = "Book your seat within a click";
    info.appendChild(btn);

    content.appendChild(info);
}

export {loadHomeContent};