
let mongoose=require('mongoose')
let express=require('express')


let schema =mongoose.Schema
mongoose.connect('mongodb://localhost:27017/mongooseSample',{useNewUrlParser: true})

//MongoDB connection
let db=mongoose.connection
db.on('error',()=>{
    console.log('error')
})

db.on('connected',()=>{
    console.log('success')
})
//mongo Schema
let userschema=new schema({email:String,username:String})
let User=mongoose.model('fbusers' , userschema)
let abdu=new User({email:"abdurahimant7@gmail.com",username: "Ata Rahman" })
abdu.save()
var app = express();
var PORT = process.env.PORT ||3014;

app.post('/api/login', (req, res) => {
    
    var fbuser = new User(req.body)
    console.log(req.body)
    fbuser.save((err)=>{
            if(err)
        console.log('insertion eror')
    else
        console.log('saved u success')
    })
});

app.listen(PORT,function(){
    console.log("App listening on PORT:" + PORT);
});