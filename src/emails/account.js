const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mordymordy@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mordymordy@gmail.com',
    subject: `Farewell, ${name}`,
    text: `I hope you enjoyed the app. If there is anything we could have improved on, please let us know before you leave forever by responding to this email.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}