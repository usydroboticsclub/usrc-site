let fs = require("fs");
let { execSync, exec } = require("child_process");
let path = require('path');



function getAllUnder(base) {
    let allPaths = [];
    let stack = [base];
    while (stack.length) {
        let list = fs.readdirSync(stack[0]);
        for (let i of list) {
            let stat = fs.statSync(stack[0] + "/" + i);
            if (stat.isDirectory()) stack.push(stack[0] + "/" + i);
            else allPaths.push(stack[0] + "/" + i);
        }
        stack.shift();
    }
    return allPaths;
}

(async () => {
    execSync("git add .");
    try {
        execSync('git commit -m "auto pre-push commit" ');
    } catch (err) {
        console.log("no changes to commit, hope this looks right");
    }
    console.log("gatsby building...");
    execSync("gatsby build --prefix-paths");
    // drag the files from public to transfer 
    let publics = getAllUnder('public');
    for (let i of publics) {
        fs.mkdirSync('transfer/' + i.slice(0, i.lastIndexOf("/")).slice("public/".length), { recursive: true });
        fs.copyFileSync(i, 'transfer/' + i.slice("public/".length));
    }
    execSync("git checkout master");
    //nerf all old files
    try {
        let nerfs = JSON.parse(String(fs.readFileSync("nerfs.json")));
        console.log(nerfs);
        for (let i of nerfs) {
            fs.unlinkSync(i);
        }
    } catch (e) {
        console.log("nothing to delete");
    }
    try {
        execSync("git merge develop");
    } catch (err) {
        console.log("merge failed, please resolve.");
        return;
    }
    // drag the files from transfer to outside
    let transfers = getAllUnder('transfer');
    let newNerfs = [];
    for (let i of transfers) {
        if (i.slice(0, i.lastIndexOf("/")).slice("transfer/".length).length > 0) {
            fs.mkdirSync(i.slice(0, i.lastIndexOf("/")).slice("transfer/".length), { recursive: true });
        }
        fs.renameSync(i, i.slice("transfer/".length));
        newNerfs.push(i.slice("transfer/".length));
    }
    //save files to nerf
    fs.writeFileSync("nerfs.json", JSON.stringify(newNerfs));
    execSync('git add .');
    try{
        execSync('git commit -m "auto-deploy"');
    }catch (e){
        console.log("nothing to deploy, hope this looks right");
    }
    execSync('git push');
    execSync('git checkout develop');
})();

// switch to index build html
// copy the index from the cache into index html
// git add
// git commit 
// git push
