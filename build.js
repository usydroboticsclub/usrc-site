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

    console.log("deleting scraps");
    //nerf all old files
    try {
        let nerfs = JSON.parse(String(fs.readFileSync("nerfs.json")));
        console.log(nerfs);
        for (let i of nerfs) {
            try {
                fs.unlinkSync(i);
            } catch (e) {
            }
        }
    } catch (e) {
        console.log("nothing to delete");
    }
    return;
    console.log("transfer from public to outside");
    let newNerfs = [];
    // drag the files from public to transfer 
    let publics = getAllUnder('public');
    for (let i of publics) {
        if (i.slice(0, i.lastIndexOf("/")).slice("public/".length).length) {
            fs.mkdirSync(i.slice(0, i.lastIndexOf("/")).slice("public/".length), { recursive: true });
        }
        fs.copyFileSync(i, i.slice("public/".length));
        newNerfs.push(i.slice("public/".length));
    }

    //save files to nerf
    fs.writeFileSync("nerfs.json", JSON.stringify(newNerfs));
    execSync('git add .');
    try {
        execSync('git commit -m "auto-deploy"');
    } catch (e) {
        console.log("nothing to deploy, hope this looks right");
    }
    execSync('git push');
})();

// switch to index build html
// copy the index from the cache into index html
// git add
// git commit 
// git push
