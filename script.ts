// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

// type assertion    
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

 //create resume output

    const resumeOutput = `
     <h2>Resume</h2>
     ${profilePictureUrl ? `<img src=${profilePictureUrl} alt="Profile Picture" class="profilePicture">` : "" }
     <p><strong>Name:</strong> ${name} </p>  
     <p><strong>Email:</strong> ${email} </p>
     <p><strong>Phone Number:</strong> ${phone} </p>

     <h3>Education</h3>
     <p>${education} </p>

     <h3>Experience</h3>
     <p><${experience} </p>
    
     <h3>Skills</h3>
     <p>${skills} </p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
    } else{
        console.error('The Resume Output Element not found')
    } 
    } else{ 
        console.log('One or More Output Element not found')
    }
})