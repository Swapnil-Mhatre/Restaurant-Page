import "./../styles/About.css"

function loadAboutContent () {
    const content = document.querySelector("#content");
    const button = document.querySelector("button#About");
    button.classList.add("active");
    
    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);

    const Heading = document.createElement("h2");
    Heading.textContent = "Have a Try";
    container.appendChild(Heading);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    container.appendChild(wrapper);

    const About = document.createElement("p");
    About.textContent = "We serve the Best Quality of food and provide best customer service experience. Our Restaurant have many varieties of foods and combination you can try for every mood and at any time we are open 24/7. We have best chef which cooks your food within minutes.";
    wrapper.appendChild(About);

    const Heading2 = document.createElement("h2");
    Heading2.textContent = "Taste the Best";
    container.appendChild(Heading2);
}

export {loadAboutContent}