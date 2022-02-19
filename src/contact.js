const contact = () => {
    const element = document.createElement('div');
    const text = document.createElement('p');
    text.textContent = "(123) 456-7891 email@gmail.com"
    element.id = "contact";
    element.appendChild(text);

    return element;
}

export default contact;