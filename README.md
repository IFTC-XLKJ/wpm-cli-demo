# wpm-cli-demo
WebIDE Package Manager Command Line Interface Demo

## project.json
```json
{
    "name": "demo", // project name
    "version": "1.0.0", // project version
    "description": "demo", // project description
    "commands": {
        "demo": "demo.js" // project command entry
//      "command name": "command entry"
    }, // project commands
    "imports": [
        "demo.js" // project imports entry
//      "import entry"
    ], // project imports
    "dependencies": {
        "demo": "1.0.0" // project dependencies entry
//      "dependency name": "dependency version"
    } // project dependencies
}
```
# `wpm` Object Document
https://xlkj-iftc.feishu.cn/wiki/LAfrwf7WiiKd36kzkMLcRXu9nyb?from=from_copylink