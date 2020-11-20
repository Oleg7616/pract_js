var form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  var input = document.querySelector('#text').value;
  var textValue = text.value;
  alert('Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля — ' + text.value);
});
