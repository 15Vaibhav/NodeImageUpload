const express = require('express');
const multer = require('multer');
const app = express();
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'image')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage });

app.post('/testUpload', upload.single('file'), function(req,res) {
    console.log('storage location is ', req.hostname +'/' + req.file.path);
    return res.send(req.file);
})
app.get('/', function(req,res) {
    return res.send("hello from my app express server!")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up and running on port ', port);
})