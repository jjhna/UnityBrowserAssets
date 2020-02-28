function setDisplayedUrl(url) {
    document.getElementById("url").textContent = url;
}

document.getElementById("url").addEventListener("click", ev => {
    document.getSelection().selectAllChildren(document.getElementById("url"));
});