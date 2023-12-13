function showServiceInformation(button) {
    const buttonsHtmlCollection = document.getElementById('service-buttons');
    const buttons = [];
    const informations = Array.from(document.getElementById('service-information-list').children);
    console.log(informations);

    informations.forEach(info => {
        info.style.display = 'none';
    });

    for (i = 0; i < buttonsHtmlCollection.childElementCount; i++) {
        buttons.push(buttonsHtmlCollection.children[i])
    }
    if (buttons.includes(button)) {
        const informationsDiv = document.getElementById('service-information-list');
        informationsDiv.style.display = 'flex';

        const info = document.getElementById('service-information-' + button.name);
        info.style.display = 'flex';
    }
}