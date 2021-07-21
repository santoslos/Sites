sessionStorage.setItem('sec', '0');

async function showContent(link, checkPush = false, e) {
    if (e) {
        e.preventDefault()
    }
    let content = document.getElementById('contentBody');

    let text = await (await fetch(link)).text();

    content.innerHTML = text;
    content.querySelectorAll('script').forEach((script) => {
        let parentElement = script.parentElement
        script.parentElement.removeChild(script);

        let newScript = document.createElement('script');

        if (script.src)
            newScript.src = script.src;
        else {
            newScript.innerText = script.innerText
        }
        parentElement.appendChild(newScript);
    })


    if (!checkPush) {
        history.pushState({link: link}, null, link);
    } else {
        window.history.replaceState({link: link}, null, link);

    }

    createActive();

}

window.addEventListener('popstate', function (e) {
    showContent(e.state.link, true);
});


if (sessionStorage.getItem('page')) {
    showContent(sessionStorage.getItem('page'), true);
} else {
    showContent('activety.html');
}
