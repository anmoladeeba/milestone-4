// get references to the form and display area
const Form = document.getElementById("resume-form") as HTMLFormElement;

const ResumedisplayElement = document.getElementById("resume-display") as HTMLElement;

// handle form submission
Form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const Name = (document.getElementById("Name") as HTMLInputElement).value;
    const Email = (document.getElementById("Email") as HTMLInputElement).value;
    const Phone = (document.getElementById("Phone") as HTMLInputElement).value;
    const Education = (document.getElementById("Education") as HTMLInputElement).value;
    const Experience = (document.getElementById("Experience") as HTMLInputElement).value;
    const Skills = (document.getElementById("Skills") as HTMLInputElement).value;

    // generate the resume content dynamically
    const ResumeHTML = `
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b><span contenenteditable="true"> ${Name}</span></p>
        <p><b>Email:</b><span contenenteditable="true"> ${Email}</span></p>
        <p><b>Phone:</b><span contenenteditable="true"> ${Phone}</span></p>
        <h3>Education</h3>
        <p contenenteditable="true">${Education}</p>
        <h3>Experience</h3>
        <p contenenteditable="true">${Experience}</p>
        <h3>Skills</h3>
        <p contenenteditable="true">${Skills}</p>
    `;

    // display the generated resume
    if (ResumedisplayElement) {
        ResumedisplayElement.innerHTML = ResumeHTML;
    } else {
        console.error("The resume display element is missing.");
    }
});
