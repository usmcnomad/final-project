
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
}

//need to update container to pull specific elementID from the div it's in
//need to update the container.appendChild to createTextNode to generate name using "name" + (i+1)
function addInquiryForm() {
    let parentId = this.parentNode.Id;
    let container = document.getElementById("");
    container.appendChild(document.createTextNode(""));
    let input = document.createElement("input");
    input.type = "text";
    input.name = "member" + i;
    container.appendChild(input);
}

function addInspectForm() {
    let container = document.getElementById("");
    container.appendChild(document.createTextNode(""));
    let input = document.createElement("input");
    input.type = "text";
    input.name = "member" + i;
    container.appendChild(input);
}

function addObservationForm() {
    let container = document.getElementById("");
    container.appendChild(document.createTextNode(""));
    let input = document.createElement("input");
    input.type = "text";
    input.name = "member" + i;
    container.appendChild(input);
}

//constructor functions to allow write up forms to scale
function inquiry(title, name, inquiryNotes) {
    this.title = title;
    this.name = name;
    this.inquiryNotes = inquiryNotes; 
}

function inspect(index, filename, inspectionNotes) {
    this.index = index;
    this.filename = filename;
    this.inspectionNotes = inspectionNotes;
}

function observation (subject, observationNotes) {
    this.subject = subject; 
    this.observationNotes = observationNotes;
}

//Updated writeup function to use constructor functions

function newWriteUp() {

}