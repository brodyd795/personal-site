import sgMail from '@sendgrid/mail';
import {FieldValues} from '../../../types/shared-types';

export const submitContactForm = ({name, email, message}: FieldValues) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');
	const msg: sgMail.MailDataRequired = {
		to: 'brodydingel@gmail.com',
		from: 'brody@dingel.dev',
		subject: 'Testing email',
		replyTo: 'brodydingel@gmail.com',
		text: `Message from ${name} at ${email}:\n\n${message}`,
		html: `Message from ${name} at ${email}:\n\n${message}`
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});
};
