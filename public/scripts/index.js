const addPostIconSources = () => {
    const ICON_ROUTE_PREFIX = '/assets/postIcons/';
    const icons = [
        'chiikawa-icon.png',
        'hachiware-icon.png',
        'kurimanju-icon.png',
        'momonga-icon.png',
        'rakko-icon.png',
        'usagi-icon.png',
    ];

    const postHeaderIcons = document.querySelectorAll('.post-icon');
    postHeaderIcons.forEach((icon) => {
        const index = Math.floor(Math.random() * icons.length);
        icon.src = `${ICON_ROUTE_PREFIX}${icons[index]}`;
    });
};

addPostIconSources();