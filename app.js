const inquirer = require("inquirer")

// const fs = require('fs')

// const generatePage = require('./src/page-templat');

// const pageHTML = generatePage(name, github);

inquirer

    .prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your name?'
        }
    ])

    .then(answers => console.log(answers))



// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// })


/*
const printProfileData = profileDataArr => {
    for (let i = 0; i< profileDataArr.length; i++) {

        console.log(profileDataArr[i]);
    }

    console.log('=================')

    profileDataArr.forEach((profileItem) => console.log(profileItem));
   
};

printProfileData(profileDataArgs)
*/
