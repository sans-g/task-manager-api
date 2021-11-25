const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'sanskarosho@gmail.com',
        subject:'Welcome',
        text:`Welcome to the app,${name}. Let me Know how you get alomg with the app`
    })
}
const sendCancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'sanskarosho@gmail.com',
        subject:'Sorry that you go',
        text:`Good Bye !,${name}. Hope to see you soon`
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}
