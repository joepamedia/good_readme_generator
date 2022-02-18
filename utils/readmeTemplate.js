// will return badge that user chooses
function renderLicenseBadge(licenseType) {
  if (licenseType !== "None") {
    return `![${licenseType}](https://img.shields.io/badge/License-${licenseType}-blue.svg)`;
  } else {
    return "";
  }
}

function renderLicenseText(licenseType) {
  if (licenseType !== "None") {
    return ` `;
  } else if (licenseType === "MIT") {
    return ``;
  } else if (licenseType === "APACHE_2.0") {
    return ``;
  } else if (licenseType === "GPL_3.0") {
    return ``;
  } else if (licenseType === "BSD_3") {
    return ``;
  } else {
    return ``;
  }
}

// ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
const readMeTemplate = (answers) => {
  return `
   # ${answers.title} ${renderLicenseBadge(answers.licenseType)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Liscense](#license)
  
  # Description 
  ### ${answers.descriptionWhat} ${answers.descriptionWhy} ${answers.descriptionSolve} ${answers.descriptionLearn} 
  
  # Installation
   ### First, make sure you have Node.js installed. [Click here](!https://nodejs.org/en/download/) to install Node JS. 

  # Usage Information
   ### ${answers.usageInfo}

  # License
  ### ${renderLicenseText(answers.licenseType)}

  


  # Questions
  If you have any questions, please contact me using a method below.   
  ## GitHub
   ### ${answers.githubName}

   ## Email
   ### ${answers.authorEmail}
   ## GitHub Info 
   ### Author
   ### ${answers.author}

  
  
    
    
    
    
    
    `;
};

module.exports = readMeTemplate;
