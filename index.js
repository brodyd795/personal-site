const express = require('express')
const app = express()
const port = 3010

const path = require('path');
const nodemailer = require('nodemailer');
const request = require('request');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});

const dotenv = require('dotenv').config({ path: __dirname+'/.env' });
const secretKey = process.env.CAPTCHA_SECRET_KEY;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '.', 'index.html')));

app.post('/', urlencodedParser, (req, res, next) => {
    const contacterData = req.body;
    const contacterName = contacterData.contacterName;
    const contacterEmail = contacterData.contacterEmail;
    const contacterMessage = contacterData.contacterMessage;
  
    if (!req.body.captcha){
      return res.json({msg: 'captcha token is undefined'});
    }
  
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;
  
    request(verifyUrl, (err, response, body) => {
      if (err) {
        console.log(err);
      }
  
      body = JSON.parse(body);
  
      if (!body.success || body.score < 0.4) {
        return res.json({'msg':'you might be a robot', 'score': body.score});
      }
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
        subject: "Personal message from " + contacterName,
        text: email_text
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          // console.log(error)
        }
      });
      return res.json({'msg':'you have been verified', 'score': body.score, 'contacterData': contacterData});
    });
  });

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))