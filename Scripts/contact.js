(function (content) {
    // Local Variables
    let fName = document.getElementById("firstName");
    let lName = document.getElementById("lastName");
    let contactNumb = document.getElementById("contactNumber");
    let emailAddress = document.getElementById("email");
    let yourMessage = document.getElementById("yourMessage");

// Takes The Data Inputs and Adds it to the appropriate variables
    function OutputFormDataToConsole() {
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c First Name    : ${fName.value}`, "color: blue;");
        console.log(`%c Last Name     : ${lName.value}`, "color: blue;");
        console.log(`%c Contact Number: ${contactNumb.value}`, "color: blue;");
        console.log(`%c Email Address : ${emailAddress.value}`, "color: blue;");
        console.log(`%c Your Message  : ${yourMessage.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Length   : ${document.forms[0].length}`, "color: blue;");
       
        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: blue;");

        }

    }

    //form validating goes on here-->
    function clearValidationMessages() {
        fName.setCustomValidity("");
        lName.setCustomValidity("");
        contactNumb.setCustomValidity("");
        emailAddress.setCustomValidity("");
        yourMessage.setCustomValidity("");
    }

    function setEventHandlersForFormElements() {

        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                // when the user is inputting data
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });

                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch(element.id) {
                        case "First Name":
                        element.setCustomValidity("You must enter an appropriate First Name with at least 3 characters");
                        break;
                        case "Last Name":
                        element.setCustomValidity("You must enter an appropriate Last Name with at least 3 characters");
                        break;
                        case "Contact Number":
                        element.setCustomValidity("You must enter a valid phone number with the pattern (###) ###-####");
                        break;
                        case "Email Address":
                        element.setCustomValidity("Your email address is not valid");
                        break;
                        case "Your Message":
                        element.setCustomValidity("You must enter a message");
                        break;
                        default:
                        element.setCustomValidity("This Field is Required");
                        break;
                    }
                    
                });
            }

        }
    }

    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    function ContactContent() {
        clearValidationMessages();

        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");

        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);


        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", (event) => {
            //event.preventDefault();
            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }


        });

    }

    // public functions exposed to the content namespace
    content.ContactContent = ContactContent;

})(content || (content = {}));
