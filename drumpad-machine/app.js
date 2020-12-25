// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
// document.addEventListener('keypress', test);

// function test(e) {
//     const keycode = e.keyCode
//     if (e.key === 'q') {
//         document.querySelector('.q-audio').play();
//         document.querySelector('.pressed').innerHTML = 'Q'
//         document.querySelector('#q').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#q').classList.remove('pressed-animation'), 100)
//     }
//     else if (e.key === 'w') {
//         document.querySelector('.w-audio').play();
//         document.querySelector('.pressed').innerHTML = 'W'
//         document.querySelector('#w').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#w').classList.remove('pressed-animation'), 300)
//     }
//     else if (e.key === 'e') {
//         document.querySelector('.e-audio').play();
//         document.querySelector('.pressed').innerHTML = 'E'
//         document.querySelector('#e').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#e').classList.remove('pressed-animation'), 300)

//     }
//     else if (e.key === 'a') {
//         document.querySelector('.a-audio').play();
//         document.querySelector('.pressed').innerHTML = 'A'
//         document.querySelector('#a').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#a').classList.remove('pressed-animation'), 300)

//     }
//     else if (e.key === 's') {
//         document.querySelector('.s-audio').play();
//         document.querySelector('.pressed').innerHTML = 'S'
//         document.querySelector('#s').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#s').classList.remove('pressed-animation'), 300)

//     }
//     else if (e.key === 'd') {
//         document.querySelector('.d-audio').play();
//         document.querySelector('.pressed').innerHTML = 'D'
//         document.querySelector('#d').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#d').classList.remove('pressed-animation'), 300)

//     }
//     else if (e.key === 'z') {
//         document.querySelector('.z-audio').play();
//         document.querySelector('.pressed').innerHTML = 'Z'
//         document.querySelector('#z').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#z').classList.remove('pressed-animation'), 300)

//     }
//     else if (e.key === 'x') {
//         document.querySelector('.x-audio').play();
//         document.querySelector('.pressed').innerHTML = 'X'
//         document.querySelector('#x').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#x').classList.remove('pressed-animation'), 300)

//     }
//     else if (e.key === 'c') {
//         document.querySelector('.c-audio').play();
//         document.querySelector('.pressed').innerHTML = 'C'
//         document.querySelector('#c').classList.add('pressed-animation')
//         setTimeout(() => document.querySelector('#c').classList.remove('pressed-animation'), 300)

//     }
// }

// New code


// let drumPad = document.querySelectorAll('.drum-pad')

const button = document.querySelectorAll('.drum-pad');
button.forEach((i) => i.addEventListener('click', function (e) {
    e.target.querySelector('.clip').play();
    document.querySelector('#display').innerHTML = e.target.textContent;
}));

let clip = document.querySelectorAll('.clip');

document.addEventListener('keydown', test);
function test(e) {
    clip.forEach(function (i) {
        if (i.id === e.key.toUpperCase()) {
            i.play();
            document.querySelector('#display').innerHTML = i.id;
        }

    })
}
