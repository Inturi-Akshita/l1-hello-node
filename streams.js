const http = require('http')
const fs = require('fs')

// const server = http.createServer((req, res) => {
//   fs.readFile('sample.txt', (err, data) => {
//     if (err) return err
//     res.end(data)
//   })
// })

// The above method completes the reading of the file first and then goes to callback function
// It is difficult if there are large number of lines in the file
// To avoid that the below asynchronous function is created

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('sample.txt')
  stream.pipe()
})
server.listen(3000)
