sessionStorage.setItem('sec', '0');
sessionStorage.setItem('min', '0');
sessionStorage.setItem('h', '0');

async function showContent(link, checkPush = false) {
    debugger;
    let content = document.getElementById('contentBody');

    let text = await (await fetch(link)).text();

    content.innerHTML = text;
    console.log(content.querySelectorAll('script'))
    content.querySelectorAll('script').forEach((script) => {
        let parentElement = script.parentElement
        script.parentElement.removeChild(script);

        let newScript = document.createElement('script');

        if (script.src)
            newScript.src = script.src;
        else {
            newScript.innerText = script.innerText
        }
        console.log(newScript)
        parentElement.appendChild(newScript);
    })


    if (!checkPush) {
        history.pushState({link: link}, null, link);
    } else {
        window.history.replaceState({link: link}, null, link);

    }
    window.addEventListener('popstate', function (e) {
        showContent(e.state.link, true);
    });
    createActive();
}


if (sessionStorage.getItem('page')) {
    showContent(sessionStorage.getItem('page'));
} else {
    showContent('activety.html');
}
