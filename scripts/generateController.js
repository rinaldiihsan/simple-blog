// Usage: npm run generate-controller <name>
const fs = require("fs")

const fileName = `${process.argv[2]}Controller`
const content = `const ${fileName} = {}

${fileName}.index = async(req,res) => {
    res.json({
        message : "Hello ${fileName}"
    })
}

module.exports = ${fileName}

`
const generatedLoc = `${__dirname + `/../controller/${fileName}.js`}`

try {
    fs.writeFileSync(generatedLoc,content)

    console.log("================================");
    console.log( "SUCCESS GENERATING CONTROLLER"  );
    console.log("================================");
    console.log("generated in :",generatedLoc);
} catch (error) {
    console.log(error)
}
