const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/*sgMail.send({
    to: 'moharamfatema@gmail.com',
    from: 'nourhanaboelsoaoud@gmail.com',
    subject: 'Just playing',
    text: ' text me if this works, Ill be amazed if it does'
})*/

const sendWelcomeEmail = ( email, name) =>{
    sgMail.send({
        to: email,
        from: 'nourhanaboelsoaoud@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancellationEmail = ( email, name) =>{
    sgMail.send({
        to: email,
        from: 'nourhanaboelsoaoud@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}