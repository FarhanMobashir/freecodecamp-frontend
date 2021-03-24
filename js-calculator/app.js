// result

let result = '';
let count = 0;
let output = result;
// elements
let clear = document.querySelector('#clear');
let preview = document.querySelector('.min-display');
let display = document.querySelector('.answer');

let button = document.querySelectorAll('button').forEach(function (btn) {

    btn.addEventListener('click', function (e) {
        // console.log(e.target.textContent

        if (e.target.textContent !== 'AC' && e.target.textContent !== '=') {

            e.target.style.background = 'rgb(8, 48, 49)';
            setTimeout(function () {
                e.target.style.background = 'cadetblue';
            }, 100)
            display.textContent += e.target.textContent
            result += e.target.textContent;
            preview.innerHTML = result;
            count = 1;
        }
        if (e.target.textContent === 'AC') {
            e.target.style.background = 'red';
            setTimeout(function () {
                e.target.style.background = 'cadetblue';
            }, 100)
            preview.innerHTML = 'preview..';
            display.innerHTML = 0;
        }
        if (e.target.textContent === '=') {
            let out = preview.innerHTML;
            display.innerHTML = eval(result);
            result = 0;
        }
        // if (display.innerHTML = eval(result)) {
        //     console.log('hello')
        // }

    })

})



// console.log(result);







