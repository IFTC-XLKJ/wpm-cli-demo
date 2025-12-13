# wpm-cli-demo
WebIDE Package Manager Command Line Interface Demo

## project.json
```json
{
    "name": "demo", // package name
    "version": "1.0.0", // package version
    "description": "demo", // package description
    "commands": {
        "demo": "demo.js" // package command entry
//      "command name": "command entry"
    }, // package commands
    "imports": [
        "demo.js" // package imports entry
//      "import entry"
    ], // package imports
    "dependencies": {
        "demo": "1.0.0" // package dependencies entry
//      "dependency name": "dependency version"
    } // package dependencies
}
```