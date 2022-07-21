// GLOBALS - NO WINDOW

// __dirname  - path to the directory
// __filename - name of the file
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
    console.log('hello world');
}, 1000);