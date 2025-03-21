const wireDeleteButtons = () => {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const messageId = button.dataset.messageId;
            fetch(`/post/${messageId}`, {
                method: 'DELETE'
            });
        })
    })
}

wireDeleteButtons();