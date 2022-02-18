function renderLicense(licenseType) {
  if (licenseType !== "None") {
    return `![${licenseType}](https://img.shields.io/badge/License-${licenseType}-blue.svg)`;
  } else {
    return "";
  }
}
// type is license type
function renderLicenseText({ licenseType, title, author }) {
  if (licenseType !== "None") {
    return "";
  } else if (licenseType === "MIT") {
    return ` Copyright <YEAR> ${author}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `;
  } else {
    return "";
  }
}

// ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
const readMeTemplate = (answers) => {
  return `
   # ${answers.title} ${renderLicense(answers.licenseType)}
  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Liscense](#license)
   ### ${answers.description}
  
   # Installation Instructions
   ### First, make sure you have Node.js installed. [Click here](!https://nodejs.org/en/download/) to install Node JS. 

   # Usage Information
   ### ${answers.usageInfo}

   # GitHub Info 
   ## Author
   ### ${answers.author}

   ## GitHub
   ### ${answers.githubName}

   ## Email
   ### ${answers.authorEmail}

  ## License
  ### ${renderLicenseText(answers)}
  
    
    
    
    
    
    `;
};

module.exports = readMeTemplate;
