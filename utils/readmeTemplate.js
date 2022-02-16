const readMeTemplate = (answers) => {
  return `
   # ${answers.title} 
   ### ${answers.explanation}
   
   # Author
   ### ${answers.author}

   # Installation Instructions
   ### First, make sure you have Node.js installed. [Click here](!https://nodejs.org/en/download/) to install Node JS. 

    
  
    
    
    
    
    
    `;
};

module.exports = readMeTemplate;
