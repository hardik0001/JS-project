const key = Array.from(document.querySelectorAll('.box'));

const keyCode = {
  A: 1,
  D: 2,
  S: 3, 
  F: 4,
  G: 5,
  H: 6,
  J: 7,
  K: 8,
  L: 9,
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  let keyPressed = e.keyCode || keyCode[e.target.innerHTML];
  if (!keyPressed) return;

  const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
  const box = document.querySelector(`div[data-key="${keyPressed}"]`);

  if (!audio) return;

  box.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

key.forEach((box) => box.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

key.forEach((box) => 
  box.addEventListener('click', (e) => {
    playSound(e);
  })
);

console.log(removeTransition());