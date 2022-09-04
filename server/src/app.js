let express = require('express')
let bodyParser = require('body-parser')
const { sequelize } = require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


require('./routes')(app)

//โช
app.get('/status', function(req, res) {
    res.send('โชเสตตัสทั้งหมด')
})
//เก็บ
app.post('/status/user',function(req,res){
    res.send('เก็บข้อมูผู้ใช้เข้าเสตตัส')
})

//ลบข้อมูล
app.delete('/status/user',function(req,res){
    res.send("ลบข้อมูลผู้ใช้ในเสตตัส")
})


let port = process.env.PORT || config.port;

sequelize.sync({ force: false }).then(() => {
    app.listen(port, function() {
        console.log('server running on ' + port);
    })
})