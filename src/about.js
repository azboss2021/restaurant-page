const about = () => {
    const element = document.createElement('div');
    const image = document.createElement('img');
    const text = document.createElement('p');
    text.textContent = "established 3 days ago. proficient in selling meat and noodles";
    element.id = "about";
    image.src = '../images/human.jpg';
    element.appendChild(image);
    element.appendChild(text);

    return element;
}

export default about;