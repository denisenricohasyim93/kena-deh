#!/usr/bin/env node

// const program = require('commander');
// const { prompt } = require('inquirer');

// const { 
//   addContact, 
//   getContact, 
//   addMultipleContacts, 
//   getContactList,
//   updateContact,
//   deleteContact  
// } = require('./logic'); 

// const questions = [
//   {
//     type : 'input',
//     name : 'firstname',
//     message : 'Enter firstname ..'
//   },
//   {
//     type : 'input',
//     name : 'lastname',
//     message : 'Enter lastname ..'
//   },
//   {
//     type : 'input',
//     name : 'phone',
//     message : 'Enter phone number ..'
//   },
//   {
//     type : 'input',
//     name : 'email',
//     message : 'Enter email address ..'
//   }

// ];

// program
//   .version('1.0.1')
//   .alias('-v')
//   .description('generate saya seorang programmer')
//   .action(() => {
//     console.log('versi terbaru lah pokoknya');
//   })

// program
//   .command('addContact')
//   .alias('a')
//   .description('Add a contact')
//   .action(() => {
//     prompt(questions).then((answers) =>
//       addContact(answers));
//   });

// program
//   .command('getContact <name>')
//   .alias('r')
//   .description('Get contact')
//   .action(name => getContact(name));

// program
//   .command('updateContact <_id>')
//   .alias('u')
//   .description('Update contact')
//   .action(_id => {
//     prompt(questions).then((answers) =>
//       updateContact(_id, answers));
//   });

// program
//   .command('deleteContact <_id>')
//   .alias('d')
//   .description('Delete contact')
//   .action(_id => deleteContact(_id));

// program
//   .command('getContactList')
//   .alias('l')
//   .description('List contacts')
//   .action(() => getContactList());


// // Assert that a VALID command is provided 
// if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
//   program.outputHelp();
//   process.exit();
// }
// program.parse(process.argv)
    
console.log('saya seorang progammer');

const fs = require('fs');
const { resolve } = require('path');

// const deleteDirFilesUsingPattern = (pattern, dirPath = __dirname) => {
//   // default directory is the current directory

//   // get all file names in directory
//   fs.readdir(resolve(dirPath), (err, fileNames) => {
//     if (err) throw err;

//     // iterate through the found file names
//     for (const name of fileNames) {

//       // if file name matches the pattern
//       if (pattern.test(name)) {

//         // try to remove the file and log the result
//         fs.unlink(resolve(name), (err) => {
//           if (err) throw err;
//           console.log(`Deleted ${name}`);
//         });
//       }
//     }
//   });
// }

// deleteDirFilesUsingPattern(/^abcdef+/);

var deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
          var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
      }
  };

deleteFolderRecursive('node_modules');