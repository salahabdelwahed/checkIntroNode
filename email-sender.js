const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "abdelwahedsalaah10@gmail.com", // Adresse e-mail Ethereal Email
    pass: "cuhk gquj xesz heop",   // Mot de passe Ethereal Email
  },
});


    const option = {
      from: 'abdelwahedsalaah10@gmail.com', // Adresse expéditeur
      to: "abdelwahedsalah.it@gmail.com",          // Adresse destinataire
      subject: "test from nodemailer",                          // Objet de l'e-mail
      text: "Hello world abdo",                         // Corps de texte de l'e-mail                 // Corps HTML de l'e-mail
    };

    transporter.sendMail(option,(err,res)=>{
      if (err) {
        console.error(err);
      }else {
        console.log(res);
      }
    })


