const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

// const fs = require('fs')

// const generatePage = require('./src/page-templat');

// const pageHTML = generatePage(name, github);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter you name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                    return true
                }
                else {
                    console.log('Please enter your GitHub Username!')
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an about section?',
            default: true
        },
        {
            type: 'input',
            name: 'About',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }

    ]);

};


const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    

    console.log(`

    =================

    Add a new Project

    =================

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true
                }
                else {
                    console.log('Please enter your project name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                }
                else {
                    console.log('Please enter the description of your project!')
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: projectLinkInput => {
                if (projectLinkInput) {
                    return true
                }
                else {
                    console.log('Please enter your GitHub project link!')
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }

    ])

    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      
    })
}

promptUser()
            .then(promptProject)
            .then(portfolioData => {
                console.log(portfolioData);
            });



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
