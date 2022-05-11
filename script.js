// Необхідно реалізувати наступний функціонал як на відео input, а саме:

// — при кліку кнопку Move текст з лівого інпута переноситься в правий, причому якщо в лівому інпуті нічого немає, текст в правому не змінюється

let f1 = document.forms.f1;

let firstInput = f1.elements[0];
let secondInput = f1.elements[2];

function insertText() {
  if (firstInput.value !== "") {
    secondInput.value = firstInput.value;
  } else {
    return;
  }
  firstInput.value = "";
}

// — при втраті фокусу в нижньому інпуті текст має переноситися в його ж placeholder, причому якщо в інпуті нічого немає, текст в placeholder не змінюється

let f2 = document.forms.f2;

f2.elements[0].addEventListener("blur", function () {
  if (f2.elements[0].value !== "") {
    f2.elements[0].placeholder = f2.elements[0].value;
  } else {
    return;
  }
  f2.elements[0].value = "";
});
