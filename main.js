function createActive() {
    const items = document.querySelector('.items').children;
    for (let i = 0; i < items.length; i++) {
        if (items.item(i).classList.contains("isActive")) {
            items.item(i).classList.remove('isActive')
            console.log(i)
        }


    }


    const URL = window.location.href
    console.log(URL, ' ', items.item(0))
    for (let i = 0; i < items.length; i++) {
        if (URL.indexOf(items.item(i).className) !==-1) {
            console.log(URL, ' ', items.item(i).className)
            items.item(i).classList.add('isActive')

        }

    }
}

console.log('aaaaa')