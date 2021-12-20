// document.querySelector('button').addEventListener('click', function() {


// Using the event.target property together with the element.tagName property to find out which element triggered a specified event:




// function myFunction(event) {
//     var x = event.target;
//     document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
// }


// function myFunction(e) {
//     e.preventDefault();
//     let x = e.target;
//     if (x.innerHTML === 'expand_less') {
//         x.innerHTML = 'expand_more';
//     } else if ((x.querySelector = ('h2')) && (x.nextElementSibling.classList.contains('collapse'))) {
//         x.nextElementSibling.classList.remove('collapse')
//         x.nextElementSibling.classList.add('expand')
//         x.nextElementSibling.innerHTML = 'expand_more';
//     } else if ((x.querySelector = ('h2')) & (x.nextElementSibling.classList.contains('expand'))) {
//         x.nextElementSibling.classList.remove('expand')
//         x.nextElementSibling.classList.add('collapse')
//         x.nextElementSibling.innerHTML = 'expand_less';
//     } else {
//         x.innerHTML = 'expand_more';

//     }
// const text = this.querySelector('span');

// if (x.classList.contains('collapse')) {
//     x.classList.remove('collapse');
//     x.classList.add('expand');
//     x.nextElementSibling.innerHTML = 'test 1';
// } else {
//     x.classList.remove('expand');
//     x.classList.add('collapse');
//     x.nextElementSibling.innerHTML = 'test 2';
// }
// };
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");


        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

    });
}

// const requestUrl = 'https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar';

// let btnEnter = document.querySelector("#form__btn-enter");
// let btnSubmitted = document.querySelector("#form__btn-submitted");
// let form = document.querySelector(".form");
// let username = document.querySelector('#name');
// let city = document.querySelector('#city');
// let state = document.querySelector('#state');
// let phone = document.querySelector('#phone');
// let email = document.querySelector('#email');
// let regex2letters = /^[a-z]{2}$/i

// phone.addEventListener('input', (e) => {
//     let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//     e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let data = {
//         name: username.value,
//         city: city.value,
//         state: state.value,
//         phone: phone.value,
//         email: email.value
//     }

//     // username
//     if (username.value.length <= 1) {
//         username.classList.add('required-border')
//         username.passed = false;
//     } else if (username.value.length >= 2) {
//         username.classList.remove('required-border');
//         username.passed = true;
//     }
//     // phone
//     if ((phone.value.match(/\d/g) == null) || (phone.value.match(/\d/g).length < 10)) {
//         phone.classList.add('required-border')
//         phone.passed = false;
//     } else {
//         phone.classList.remove('required-border');
//         phone.passed = true;
//     }
//     //email
//     if (email.value === '') {
//         email.classList.add('required-border')
//         email.passed = false;
//     } else {
//         email.classList.remove('required-border');
//         email.passed = true;
//     }
//     // submit post and input validation
//     if ((username.passed === true) && (phone.passed === true) && (email.passed === true)) {
//         btnEnter.classList.add('hide')
//         btnSubmitted.classList.remove('hide');
//         // ajax call
//         $.post('https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar', JSON.stringify(data), (data, status) => {
//             console.log(data, `${status} POST data submitted`);
//         })
//     } else {
//         console.log('error')
//     }

// });