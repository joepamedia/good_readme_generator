// global variables
// we want to work with inquirer
// work with file system (fs)
// NPM pkg first then local imported files

const inquirer = require("inquirer");
const fs = require("fs");

// links readMeTemplate.js
const readMeTemplate = require("./utils/readmeTemplate");

// functions
const collectUserInfo = () => {
  inquirer
    //   asks user questions in terminal
    // array of objects will be passed to the prompt method
    .prompt([
      {
        type: "input",
        name: "title",
        message: "enter your project title",
      },
      {
        type: "input",
        name: "description",
        message: "enter a brief description about your ",
      },
      {
        type: "input",
        name: "usageInfo",
        message: "enter usage information",
      },
      {
        type: "input",
        name: "author",
        message: "enter your name",
      },
      {
        type: "input",
        name: "githubName",
        message: "enter your github username",
      },
      {
        type: "input",
        name: "authorEmail",
        message: "enter your email",
      },
      {
        type: "list",
        name: "licenseType",
        message: "What is your license?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
    ])
    .then((answers) => {
      // question response answers
      console.log(answers);
      // creates README with user's answers
      createReadMeFile(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};
collectUserInfo();

const createReadMeFile = (answers) => {
  //   template is assigned the value returned from readMeTemplate
  const template = readMeTemplate(answers);
  console.log(template);
  // string value will be stored in template
  fs.writeFile("output/README.md", template, (err) => (err ? console.error(err) : console.log("Success!")));
};

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
