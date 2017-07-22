'use strict';

button.addEventListener('click', testForm);


function testForm() {
    const regexpName = /[A-z]/g,
        regexpNumber = /\+\d\(\d{3}\)\d{3}-\d{4}\b/g,
        regexpMail = /(\w+@\w+\.\w+)|(\w+\.\w+@\w+\.\w+)|(\w+-\w+@\w+\.\w+)/g,
        regexpArea = /\w+/g;

    let resultName, resultNumber, resultMail, resultArea,
        getName = document.getElementById('name'),
        getNumber = document.getElementById('number'),
        getMail = document.getElementById('mail'),
        getArea = document.getElementById('area');


    resultName = regexpName.test(getName.value);
    if (!resultName) {
        getName.className = "red";
        document.getElementById('errorName').innerHTML = 'Error';
    } else {
        getName.className = "green";
        document.getElementById('errorName').innerHTML = '';
    }


    resultNumber = regexpNumber.test(getNumber.value);
    if (!resultNumber) {
        getNumber.className = "red";
        document.getElementById('errorNumber').innerHTML = 'Error';
    } else {
        getNumber.className = "green";
        document.getElementById('errorNumber').innerHTML = '';

    }


    resultMail = regexpMail.test(getMail.value);
    console.log(resultMail, regexpMail.exec(getMail.value));
    if (!resultMail) {
        getMail.className = "red";
        document.getElementById('errorMail').innerHTML = 'Error';
    } else {
        getMail.className = "green";
        document.getElementById('errorMail').innerHTML = '';

    }


    resultArea = regexpArea.test(getArea.value);
    if (!resultArea) {
        getArea.className = "red";
        document.getElementById('errorArea').innerHTML = 'Error';
    } else {
        getArea.className = "green";
        document.getElementById('errorArea').innerHTML = '';

    }


}