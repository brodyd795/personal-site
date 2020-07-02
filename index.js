const express = require('express')
const app = express()

const path = require('path');
const nodemailer = require('nodemailer');
const request = require('request');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());

const dotenv = require('dotenv').config({ path: __dirname+'/.env' });

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '.', 'index.html')));

app.post('/', urlencodedParser, (req, res, next) => {
    try {
      const contacterData = req.body;
      const contacterName = contacterData.contacterName;
      const contacterEmail = contacterData.contacterEmail;
      const contacterMessage = contacterData.contacterMessage;

      const email_text = `${contacterName} sent you a message on your personal website. You can contact them at ${contacterEmail}. \n\nMessage:\n${contacterMessage}`;
    
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_RECIPIENT_PERSONAL_SITE,
        subject: `Personal message from ${contacterName}`,
        text: email_text
      };

      transporter.sendMail(mailOptions, (error, info) => {
          res.json({ success: error ? false : true });        
      });
    } catch (error) {
      res.json({ success: false });
    }
  });

const port = process.env.PORT;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))