
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
function writeUp() {
    console.log("called writeUp");
    let inquiredTitle1 = document.querySelector('#int1-title');
    let inquiredName1 = document.querySelector('#int1-name');
    let inquiredNotes1 = document.querySelector('#int1-notes'); 
    let documentIndex1 = document.querySelector('#document1-index');
    let documentName1 = document.querySelector('#document1-title');
    let documentNotes1 = document.querySelector('#document1-notes');
    let observationSubject1 = document.querySelector('#observation-1');
    let observationNotes1 = document.querySelector('#observation1-notes');
    //let generate = document.querySelector("#generate")
    
    generateWriteUp();

    //launch.addEventListener("click", generateWriteup, false);

    function generateWriteUp() {
        console.log("called generateWriteUp")
        let genWriteUp = "";
        genWriteUp += "<p>Inquired of " + inquiredTitle1.value + " noting that: </p>";
        genWriteUp += "<ul><li>" + inquiredNotes1.value + "</li></ul>";
        genWriteUp += "<p>Inspected " + documentName1.value + " noting that</p>";
        genWriteUp += "<ul><li>" + documentNotes1.value + "</li></ul>";
        genWriteUp += "<p>Inspected " + observationSubject1.value + " noting that</p>";
        genWriteUp += "<ul><li>" + observationNotes1.value + "</li></ul>";

        completeWriteUp.innerHTML = genWriteUp;

    }

    expandDiv();
    console.log(completeWriteUp);
    console.log(genWriteUp);
}