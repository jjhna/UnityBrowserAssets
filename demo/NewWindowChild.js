var args = document.location.search.substr(1).split('&').reduce((res, v) => {
    res[v.split('=')[0]] = decodeURIComponent(v.split('=')[1]);
    return res;
}, {});

document.body.style.background = `${(args.color || 'gray')} radial-gradient(transparent, rgba(255, 255, 255, .3))`;
document.querySelector("h1").textContent = args.text || 'I am a window!';