let food = [
    { name: "Borsóleves", price: "500 Ft", type: "Étel"},
    { name: "Palócgulyás leves", price: "600 Ft", type: "Étel"},
    { name: "Paradicsomleves", price: "550 Ft", type: "Étel"},
    { name: "Húsos spagetti", price: "700 Ft", type: "Étel"},
    { name: "Vegetariánus spagetti", price: "600 Ft", type: "Étel"},
    { name: "Pörkölt", price: "700 Ft", type: "Étel"},
    { name: "Székelykáposzta", price: "700 Ft", type: "Étel"},
    { name: "Csibe Burger", price: "800 Ft", type: "Étel"},
    { name: "Parmezámos csirkemell", price: "900 Ft", type: "Étel"},
    { name: "Rizs", price: "700 Ft", type: "Étel"},
    { name: "Sült burgonya", price: "700 Ft", type: "Étel"},
    { name: "Piritott burgonya", price: "700 Ft", type: "Étel"},
    { name: "Fagyalt(CSokoládé/Eper/Vanilia)", price: "500 Ft", type: "Étel"},
    { name: "Meggyes piskóta", price: "600 Ft", type: "Étel"},
    { name: "Brownie", price: "600 Ft", type: "Étel"},
    { name: "Búzasör", price: "500 Ft", type: "Ital"},
    { name: "Barnasör", price: "550 Ft", type: "Ital"},
    { name: "Világos sör", price: "550 Ft", type: "Ital"},
    { name: "Whisky", price: "600 Ft", type: "Ital"},
    { name: "Rum", price: "600 Ft", type: "Ital"},
    { name: "Brandy", price: "700 Ft", type: "Ital"},
    { name: "Sherry", price: "700 Ft", type: "Ital"},
    { name: "Vodka", price: "700 Ft", type: "Ital"},
    { name: "Ásványviz(Szénsavas/Szénsavmentes)", price: "350 Ft", type: "Ital"},
    { name: "Gyümölcslé(Alma/Körte/Őszibarack)", price: "400 Ft", type: "Ital"},
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let
    