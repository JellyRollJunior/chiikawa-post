const addSelectedImageIcon = () => {
    const createUsagiIcon = () => {
        const usagi = document.createElement('img');
        usagi.classList.add('selected-icon');
        usagi.src = '/assets/postIcons/usagi-icon.png';
        return usagi;
    }

    const removeExistingSelectedIcons = () => {
        const icons = document.querySelectorAll('fieldset .selected-icon');
        icons.forEach((icon) => {
            icon.remove();
        });
    };

    // display usagi icon if selected
    const postCompanionFieldset = document.querySelector('fieldset');
    postCompanionFieldset.addEventListener('click', () => {
        removeExistingSelectedIcons();
        const selectedImage = document.querySelector(
            '.image-square:has(input:checked + label)'
        );
        selectedImage.appendChild(createUsagiIcon());
    });

    // select default value
    const defaultIcon = document.querySelector('.image-square:has(input[id="10"])');
    defaultIcon.appendChild(createUsagiIcon());
};

addSelectedImageIcon();
