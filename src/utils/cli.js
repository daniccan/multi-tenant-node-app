const util = require('util');
const exec = util.promisify(require('child_process').exec);

let CLI = {

  executeCommand: async (command) => {
    return new Promise(function(resolve, reject) {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          return reject(error);
        }
        resolve(true);
      });
    });
  }

};

module.exports = CLI;
