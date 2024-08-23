import "./../styles/Menu.css";

let CateogaryDets = [
    {FoodType: "BreakFast", id: "BreakFast"},
    {FoodType: "Lunch", id: "Lunch"},
    {FoodType: "Dinner", id: "Dinner"},
    {FoodType: "Dessert", id: "Dessert"}
]

function loadMenuContent () {
    const content = document.querySelector("#content");
    const button = document.querySelector("nav button#Menu");
    button.classList.add("active");
    
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    content.appendChild(wrapper);

    CateogaryDets.forEach((CateogaryDet) => {
        const cateogaryCon = document.createElement("div");
        cateogaryCon.classList.add("cateogary");
        wrapper.appendChild(cateogaryCon);

        const textCon = document.createElement("div");
        textCon.classList.add("text");
        cateogaryCon.appendChild(textCon);

        const Title = document.createElement("p");
        Title.textContent = CateogaryDet.FoodType;
        textCon.appendChild(Title);

        const imageCon = document.createElement("div");
        imageCon.classList.add("type");
        imageCon.id = CateogaryDet.id;
        cateogaryCon.appendChild(imageCon);
    });
}

export {loadMenuContent};