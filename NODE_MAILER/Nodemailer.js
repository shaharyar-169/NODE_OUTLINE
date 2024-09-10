const http= require('http');
const nodemailer= require('nodemailer');

// here i am creating a sever  using http method
const server= http.createServer((req, res) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: 'shaharyarrazzaq78@gmail.com',
            pass: 'your-email-password'
        }
    })

    const reciever={
        from:'shaharyarrazzaq78@gmail.com',
        to: 'your-email-address',
        subject: 'Test Email',
        text: 'This is a test email'
    }

    auth.sendMail(reciever, (err, info) => {
        if(err) console.log(err)
        else console.log('Email sent: ', info.response);
    })
})

server.listen(4000 + 'server is listening on port 4000')