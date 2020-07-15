var coords = document.querySelector('.red-box');

coords.addEventListener('mousemove', function (e) {
    coords.innerHTML = `x: ${ e.x } | y: ${ e.y }`;
});
