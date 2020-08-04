const express= require('express');
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');
const port=5010

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser())


const {sendEmail}=require('./mail')

app.post('/api/sendMail',(req,res)=>{
    sendEmail(req.body.email,req.body.name,"hello")
})

app.listen(port,()=>{
    console.log('server is running ', port )
})