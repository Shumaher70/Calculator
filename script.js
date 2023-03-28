const screen = document.querySelector('.calculator input');
const btns = document.querySelectorAll('.btn');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let valueBtn = e.target.dataset.num;
    screen.value += valueBtn;
  });
});

btnEqual.addEventListener('click', () => {
  if (screen.value == '') {
    screen.value = 'Please add number';
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});

btnClear.addEventListener('click', () => (screen.value = ''));
