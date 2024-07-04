Window.onload = function() {
    addColor()

};
for (let i = 1; i <= 9; i++) {
    const boxes = document.createElement('div');
    boxes.classList.add('box');
    document.querySelector('.container').appendChild(boxes);
    boxes.style.cursor = 'pointer';
    boxes.addEventListener('click', () => {
        console.log(boxes.innerHTML);
        navigator.clipboard.writeText(boxes.innerHTML);
        console.log("copied");
        toastr.success('Now you can use it!', 'Copied to clipboard', { timeOut: 3000 })

    });
}
const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box')

console.log(randomColorBlock);

function randomAddColor() {
    var letter = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];

    }

    return color;
}
console.log(randomAddColor());


function addColor() {
    randomColorBlock.forEach(e => {
            var newColor = randomAddColor();
            e.style.backgroundColor = newColor;
            e.innerHTML = newColor;
        }

    )
}
// console.log(addColor());