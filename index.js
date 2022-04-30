function init() {
  const fs = require("fs");
  const inquirer = require("inquirer");
  const generatePage = require("./src/genMD.js");
  const { writeFile } = require("./utils/generate-site.js");

  // TODO: Create an array of questions for user input
  const userInfo = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "user",
        message: "Please enter your name.",
        validate: (uNameInput) => {
          if (uNameInput) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "project",
        message: "Please enter the name of your project.",
        validate: (pInput) => {
          if (pInput) {
            return true;
          } else {
            console.log("Please enter a project name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
        validate: (pDescInput) => {
          if (pDescInput) {
            return true;
          } else {
            console.log("Please enter a project description.");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmInstall",
        message:
          "Would you like to provide any installation instructions for your project?",
        default: true,
      },
      {
        type: "input",
        name: "install",
        message: "Please provide some installation instructions.",
        when: ({ confirmInstall }) => {
          if (confirmInstall) {
            return true;
          }      
        },
      },
      {
        type: "confirm",
        name: "confirmUsage",
        message:
          "Would you like to provide any usage information on how the project works?",
        default: true,
      },
      {
        type: "input",
        name: "useage",
        message: "Please provide some usage information.",
        when: ({ confirmUsage }) => {
          if (confirmUsage) {
            return true;
          } 
        },
      },
      {
        type: "list",
        name: "license",
        message: "Please select a license type for your project.",
        choices: ["Apache 2.0", "BSD", "GNU-GPL", "MIT", "Mozilla"],
      },
      {
        type: "confirm",
        name: "confirmContrib",
        message: "Would you like to provide contribution guidelines?",
        default: true,
      },
      {
        type: "input",
        name: "contrib",
        message: "Please provide contribution guidelines here.",
        when: ({ confirmContrib }) => {
          if (confirmContrib) {
            return true;
          } 
        },
      },
      {
        type: "confirm",
        name: "confirmTest",
        message: "Would you like to provide testing information?",
        default: true,
      },
      {
        type: "input",
        name: "test",
        message: "How do people provide tests information for your project?",
        when: ({ confirmTest }) => {
          if (confirmTest) {
            return true;
          }           
        },
      },

      {
        type: "input",
        name: "question",
        message: "Please enter an email address for questions?",
        validate: (eAddress) => {
          if (eAddress) {
            return true;
          } else {
            console.log("Please enter a project description.");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmMedia",
        message: "Would you like to add a link to an image or media file?",
        default: true,
      },
      {
        type: "input",
        name: "medianame",
        message: "Please give your media file a name.",
        when: ({ confirmMedia }) => {
          if (confirmMedia) {
            return true;
          } 
        },
      },
      {
        type: "input",
        name: "media",
        message: "Please enter a relative path to the media file you want to use",
        when: ({ confirmMedia }) => {
          if (confirmMedia) {
            return true;
          } 
        },
      },
    ]);
  };
  userInfo()
    .then((readMeData) => {
      return generatePage(readMeData);
    })
    .then((pageHTML) => {
      return writeFile(pageHTML);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
