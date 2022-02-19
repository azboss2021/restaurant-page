const start = () => {
    const element = document.createElement('div');
    const image = document.createElement('img');
    const text = document.createElement('p');
    text.textContent = "Lovely food here.";
    element.id = "start";
    image.src = '../images/beautiful.png';
    element.appendChild(image);
    element.appendChild(text);

    return element;
}

export default start;