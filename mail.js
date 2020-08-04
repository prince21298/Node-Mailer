const mailer=require('nodemailer');
const {Hello}=require("./hello_template");
const {Thanks}=require("./thanks_template");
const dotenv = require('dotenv').config()


const getMailData=(to,name,template)=>{
    let data=null;

    switch(template){
        case"hello":
        data={
            from:'Prince Kumar <'+process.env.email_id+'>',
            to,
            subject:`Hello${name}`,
            html:Hello()
        }
        break;
        case"thanks":
        data={
            from:'Prince Kumar <'+process.env.email_id+'>',
            to,
            subject:`Hello${name}`,
            html:Thanks()
        }
        break;

        default:
            data;
    }
    return data;
}



const sendEmail=(to,name,type)=>{
    const smtpTransport=mailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.email_id,
            pass:process.env.pass
        }
    })
    const mail=getMailData(to,name,type)

    smtpTransport.sendMail(mail,function(error,response){
        if (error){
            console.log(error);
        }else{
            console.log("email sent sucessfully.. ");
        }
        smtpTransport.close();
    })
}
module.exports={sendEmail}