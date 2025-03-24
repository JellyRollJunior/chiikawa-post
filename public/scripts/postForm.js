const addSelectedImageIcon = () => {
    const removeExistingSelectedIcons = () => {
        const icons = document.querySelectorAll('fieldset .selected-icon');
        icons.forEach((icon) => {
            icon.remove();
        });
    };

    const postCompanionFieldset = document.querySelector('fieldset');
    postCompanionFieldset.addEventListener('click', () => {
        removeExistingSelectedIcons();
        const selectedImage = document.querySelector(
            '.image-square:has(input:checked + label)'
        );
        const selectedIcon = document.createElement('img');
        selectedIcon.classList.add('selected-icon');
        selectedIcon.src = '/assets/postIcons/usagi-icon.png';
        selectedImage.appendChild(selectedIcon);
    });
};

addSelectedImageIcon();
