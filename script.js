function toggleText(button) {
    if (button.textContent === 'Add+') {
        button.textContent = 'Added';
        button.style.backgroundColor = 'rgb(209, 7, 7)';
    } else {
        button.textContent = 'Add+';
        button.style.backgroundColor = '';
    }
}