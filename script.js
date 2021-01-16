function randNum() {
    return Math.floor(Math.random() * 256);
};

function randRGB() {
    const red = randNum();
    const green = randNum();
    const blue = randNum();
    return `rgb(${red}, ${green}, ${blue})`;
}

for (let i = 1; i < 29; i++) {
    document.getElementById(`${i}`).style.color = randRGB();
};