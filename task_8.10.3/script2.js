function clickMe() {
    prompt('Введите доллары')
}

submit.addEventListener('click', function() {
    var input = prompt("Введите доллары");
 alert(input + "долларов=" + input * 76.21 + "рублей.")
});
