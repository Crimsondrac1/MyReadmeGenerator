
const getUser = (pUser) => {
  if (!pUser) {
    return "";
  }

  return `${pUser}`;
};

const getpName = (pName) => {
  if (!pName) {
    return "";
  }

  return `${pName}`;
};

const getDesc = (pDesc) => {
  if (!pDesc) {
    return "";
  }

  return `${pDesc}`;
};

const getInst = (pInst) => {
  if (!pInst) {
    return "N/A";
  }

  return `${pInst}`;
};

const getUse = (pUse) => {
  if (!pUse) {
    return "N/A";
  }

  return `${pUse}`;
};

const getLic = (pLic) => {
  if (!pLic) {
    return "No License Specified";
  }

  return `${pLic}`;
};

const getCont = (pCont) => {
  if (!pCont) {
    return "N/A";
  }

  return `${pCont}`;
};

const getTest = (pTest) => {
  if (!pTest) {
    return "N/A";
  }

  return `${pTest}`;
};

const getQues = (pQues) => {
  if (!pQues) {
    return "N/A";
  }

  return `${pQues}`;
};

const getMediaName = (pMediaName) => {
  if (!pMediaName) {
    return "No media available";
  }

  return `![${pMediaName}]`;
};

const getMedia = (pMedia) => {
  if (!pMedia) {
    return "";
  }

  return `(${pMedia})`;
};

module.exports = (templateData) => {
  // destructure page data by section
  const {
    user,
    project,
    description,
    install,
    useage,
    license,
    contrib,
    test,
    question,
    medianame,
    media,
  } = templateData;

  if (license === "Apache 2.0") {
    licenseString = `[![License: Apache 2.0](https://crimsondrac1.github.io/Portfolio/assets/images/apache.jpg)](https://www.apache.org/licenses/LICENSE-2.0)`;
  }
  if (license === "BSD") {
    licenseString = `[![License: BSD](https://crimsondrac1.github.io/Portfolio/assets/images/bsd.jpg)](https://en.wikipedia.org/wiki/BSD_licenses)`;
  }
  if (license === "GNU-GPL") {
    licenseString = `[![License: GNU-GPL](https://crimsondrac1.github.io/Portfolio/assets/images/gnu-gpl.png)](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  }
  if (license === "MIT") {
    licenseString = `[![License: MIT](https://crimsondrac1.github.io/Portfolio/assets/images/mit.png)](https://en.wikipedia.org/wiki/MIT_License)`;
  }
  if (license === "Mozilla") {
    licenseString = `[![License: Mozilla](https://crimsondrac1.github.io/Portfolio/assets/images/mozilla.jpg)](https://www.mozilla.org/en-US/MPL/)`;
  }

  return `
  # ${getpName(project)} \n
  ### A project by: ${getUser(user)} \n
  ${getDesc(description)} \n
  Licensed with:\n
  ${(licenseString)}

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
  ${(licenseString)}


  ## Contributions
  #### ${getCont(contrib)}


  ## Tests
  #### ${getTest(test)}


  ## Questions
  #### ${getQues(question)}


  ## Media
  #### ${getMediaName(medianame)}${getMedia(media)}
  `;
};