window.onload = function () {
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', buttonClicked);
  window.addEventListener('keyup', () => (event.keyCode === 13) ? buttonClicked() : '');

  const input = document.getElementsByTagName('input')[0];
  const numbersArr = document.getElementsByClassName('numbers');

  function buttonClicked() {
    //#region clear previous hits
    const hitsArr = Array.from(document.getElementsByClassName('hit'));
    hitsArr.forEach(div => div.className = 'numbers');
    //#endregion

    //#region show current hits
    if ((/\d+|\d+\s+/gm).test(input.value)) {
      const inputValueArr = input.value.split(' ');
      for (let i = 0; i < inputValueArr.length; i++) {
        const index = Number(inputValueArr[i]) - 1;
        if (numbersArr[index] !== undefined) numbersArr[index].className += ' hit';
      }
    }
    //#endregion

    input.value = '';
    input.focus();
  }
};