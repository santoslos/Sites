function createActive() {
    const items = document.querySelector('.items').children;
    for (let i = 0; i < items.length; i++) {
        if (items.item(i).firstElementChild.classList.contains("isActive")) {
            items.item(i).firstElementChild.classList.remove('isActive')
        }


    }


    const URL = window.location.href
    console.log(URL, ' ', items.item(0))
    for (let i = 0; i < items.length; i++) {
        if (URL.indexOf(items.item(i).firstElementChild.className) !== -1) {
            console.log(URL, ' ', items.item(i).className)
            items.item(i).firstElementChild.classList.add('isActive')
        }

    }
}

console.log('aaaaa')