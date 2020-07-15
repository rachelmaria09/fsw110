/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

const keyIn = document.getElementById('keyIn');

window.addEventListener('keydown', (e) => {
    console.log(e);
    const {key, keyCode, code} = e;

    var final = document.getElementById('output'); 
    final.innerHTML = `You've pressed the ${key}. It's key code is ${keyCode}.`
});