let rgb_bg = [0, 0, 0];
let bg = document.getElementById('button_1');
let red_range = document.getElementById('red_range');
let green_range = document.getElementById('green_range');
let blue_range = document.getElementById('blue_range');
let bg_img_url = document.getElementById('url');
let text_1_input = document.getElementById('text_1_input');
let text_2_input = document.getElementById('text_2_input');
let text_1_display = document.getElementById('text_1_display');
let text_2_display = document.getElementById('text_2_display');



red_range.addEventListener('input', red_input);
green_range.addEventListener('input', green_input);
blue_range.addEventListener('input', blue_input);
bg_img_url.addEventListener('keyup', bg_image);
text_1_input.addEventListener('input', display_text_1);
text_2_input.addEventListener('input', display_text_2)


function red_input() {
    console.log(red_range.value);
    rgb_bg[0] = red_range.value;
    document.body.style.backgroundColor = 'rgb(' + rgb_bg.join(',') + ')';
}
function green_input() {
    console.log(green_range.value);
    rgb_bg[1] = green_range.value;
    document.body.style.backgroundColor = 'rgb(' + rgb_bg.join(',') + ')';
}
function blue_input() {
    console.log(blue_range.value);
    rgb_bg[2] = blue_range.value;
    document.body.style.backgroundColor = 'rgb(' + rgb_bg.join(',') + ')';
}

function bg_image(e) {
    if (e.keyCode === 13) {
        console.log(`"url('${bg_img_url.value}')"`);
        var z = new Image();
        z.src = bg_img_url.value;
        document.body.background = z.src;
    }



}

function display_text_1() {
    console.log();
    text_1_display.innerHTML = text_1_input.value;
}

function display_text_2() {
    console.log();
    text_2_display.innerHTML = text_2_input.value;
}
