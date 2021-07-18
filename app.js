sessionStorage.setItem('sec', '0');
sessionStorage.setItem('min', '0');
sessionStorage.setItem('h', '0');
function showContent(link, checkPush = false) {
    $("#contentBody").load(link, () => {
        if (!checkPush) {
            history.pushState({link: link}, null, link);
        } else {
            window.history.replaceState({link: link}, null, link)
        }

        createActive();

    })

}


window.addEventListener('popstate', function (e) {
    showContent(e.state.link, true)
});
showContent('activety.html')