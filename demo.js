// cli entry file
// You can use `wpm` in `globalThis` Object. (`wpm` Document: https://xlkj-iftc.feishu.cn/wiki/LAfrwf7WiiKd36kzkMLcRXu9nyb?from=from_copylink)
/**
 * @description cli entry function
 * @param {String[]} args
 * @returns {Promise<Number>}
 */
async function main(args) {
    console.log(args); // print the args
    console.log(wpm); // print the wpm object
    return 0; // return exit code (0 means success, other values[include not return] mean failure; if return 0, the process will continue, otherwise the process will stop and exit)
}
// command example: demo -a b "c d"
// args example: ["demo", "-a", "b", "c d"]