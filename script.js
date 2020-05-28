
//close the input form and expand the matrix view//
function expandDiv() {
    document.getElementById('input-form').style.width = '0%';
    document.getElementById('input-form').style.opacity = '0';
    document.getElementById('container-template').style.width = '100%';
    document.getElementById('container-template').style.opacity = '1';
    document.getElementById('writeup-1-open').style.opacity = '0';
    document.getElementById('writeup-1-open').style.width = '0px';
    document.getElementById('writeup-1-close').style.opacity = '1';
    document.getElementById('writeup-1-close').style.width = '20px';
}

//close the matrix view and return to the input form//
function closeDiv() {
    document.getElementById('input-form').style.width = '100%';
    document.getElementById('input-form').style.opacity = '1';
    document.getElementById('container-template').style.width = '0%';
    document.getElementById('container-template').style.opacity = '0';
    document.getElementById('writeup-1-open').style.opacity = '1';
    document.getElementById('writeup-1-open').style.width = '20px';
    document.getElementById('writeup-1-close').style.opacity = '0';
    document.getElementById('writeup-1-close').style.width = '0px';
}

//accept inputs and parse into necessary variables//
function parseAssessmentInputs() {

}

//generate writeups from inputs//
//hint: javascript classes to scale up; use this function to define the properties w/ each writeup as the object//
//hint: use indexof to search/find &&//
function createWriteup() {
    let inquired; 
    let inspected;
    let observed;
    let completeWriteup;
}