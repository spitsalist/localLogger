const fs = require('fs')

const logMessage = (message) => {
    fs.appendFile('log.txt', message + '\n', (err) => {
        if (err) {
            console.log('Error writing to log.txt', err)
            }else {
                console.log('Message writted to file succesfuly')
            }
    })
} 

module.exports = {logMessage}