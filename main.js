function createActive() {
    const items = document.querySelector('.items').children;
    for (let i = 0; i < items.length; i++) {
        if (items.item(i).firstElementChild.classList.contains("isActive")) {
            items.item(i).firstElementChild.classList.remove('isActive')
        }
    }
    const URL = window.location.href
    for (let i = 0; i < items.length; i++) {
        if (URL.includes(items.item(i).firstElementChild.className)) {
            items.item(i).firstElementChild.classList.add('isActive')
        }
    }
}
