const menu = () => {
    const element = document.createElement('div');
    const text = document.createElement('p');
    text.textContent = "$2: Hot dog; $1: Noodle; $3: Pizza; $3: Double double"
    element.id = "menu";
    element.appendChild(text);

    return element;
}

export default menu;