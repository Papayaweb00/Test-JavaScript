$(document).ready(function () {
    let input = $('#saisie');
    let btn = $('button');

    let string = '';
    // const arr = Array.from(btn);

    btn.on('click', function (e) {
        let value = e.target.innerHTML;

        if (value === '=') {
            string = eval(string);
            input.val(string);
            // console.log('Bonjour');
        } else if (value === 'RESET') {
            string = "";
            input.val(string);
        } else if (value === 'DEL') {
            string = string.substring(0, string.innerHTML - 1);
            input.val(string);
        } else {
            string += value;
            input.val(string);
        }
    })
})