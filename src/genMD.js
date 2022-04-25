// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }'Apache 2.0', 'BSD', 'GNU-GPL', 'MIT', 'Mozilla'

function getBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "Apache 2.0") {
    licenseString = `![License: MIT](https://crimsondrac1.github.io/Portfolio/assets/images/apache.jpg)`
  };
  if (licenseType === "BSD") {
    licenseString = `![License: GPL v2](https://crimsondrac1.github.io/Portfolio/assets/images/bsd.jpg)`
  };
  if (licenseType === "GNU-GPL") {
     licenseString = `![License](https://crimsondrac1.github.io/Portfolio/assets/images/gnu-gpl.png)`
    };
  if (licenseType === "MIT") {
      licenseString = `![License: GPL v3](https://crimsondrac1.github.io/Portfolio/assets/images/mit.png)`
    };
  if (licenseType === "Mozilla") {
      licenseString = `![License: GPL v3](https://crimsondrac1.github.io/Portfolio/assets/images/mozilla.png)`
    };
  return licenseString
  };


// create the about section
const getUser = pUser => {
  if (!pUser) {
    return '';
  }

  return `${pUser}`;
};


const getpName = pName => {
  if (!pName) {
    return '';
  }

  return `${pName}`;
};

const getDesc = pDesc => {
  if (!pDesc) {
    return '';
  }

  return `${pDesc}`;
};

const getInst = pInst => {
  if (!pInst) {
    return 'N/A';
  }

  return `${pInst}`;
};

const getUse = pUse => {
  if (!pUse) {
    return 'N/A';
  }

  return `${pUse}`;
};

const getLic = pLic => {
  if (!pLic) {
    return 'No License Specified';
  }

  return `${pLic}`;
};

const getCont = pCont => {
  if (!pCont) {
    return 'N/A';
  }

  return `${pCont}`;
};

const getTest = pTest => {
  if (!pTest) {
    return 'N/A';
  }

  return `${pTest}`;
};

const getQues = pQues => {
  if (!pQues) {
    return 'N/A';
  }

  return `${pQues}`;
};

const getMediaName = pMediaName => {
  if (!pMediaName) {
    return 'N/A';
  }

  return `${pMediaName}`;
};

const getMedia = pMedia => {
  if (!pMedia) {
    return 'N/A';
  }

  return `${pMedia}`;
};



module.exports = templateData => {
  // destructure page data by section
  const { user, project, description, install, useage, license, contrib, test, question, medianame, media } = templateData;
  // console.log(title)
  // ${getLicPic()}

  return `
  # ${getpName(project)} ### A project by: ${getUser(user)}
  **${getDesc(description)}**
  Licensed with ${getBadge(data)}
  
  ---

  ## Table of Contents
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [License](#license)
  ### [Contributions](#contributions)
  ### [Tests](#tests)
  ### [Questions](#questions)
  ### [Screenshots/Media](#media)

  ---

  ## Installation
  #### ${getInst(install)}


  ## Usage
  #### ${getUse(useage)}


  ## License
  #### This project is using the ${getLic(license)} license.
  ${getBadge(data)}


  ## Contributions
  #### ${getCont(contrib)}


  ## Tests
  #### ${getTest(test)}


  ## Questions
  #### ${getQues(question)}


  ## Screenshots/Media
  #### ![${getMediaName(medianame)}](${getMedia(media)})
  `;
};





// module.exports = generateMarkdown;