import sgMail, {MailDataRequired as MailData} from '@sendgrid/mail';
import {FieldValues} from '../../../types/shared-types';

export const submitContactForm = async ({
	name,
	email,
	message
}: FieldValues) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

	const messageToMe: MailData = {
		to: 'brody.dingel@gmail.com',
		from: 'Brody Dingel<brody@dingel.dev>',
		subject: 'New message via personal website',
		replyTo: email,
		text: `Hey! You've received a message from ${name} (${email}) on your personal website: ${message} Hit 'reply' below!`,
		html: `Hey! You've received a message from ${name} (${email}) on your personal website:<br /><br /><i>${message}</i><br /><br />Hit 'reply' below!`
	};
	const confirmationMessage: MailData = {
		to: email,
		from: 'Brody Dingel<brody@dingel.dev>',
		subject: 'Thanks for your message!',
		replyTo: 'brody.dingel@gmail.com',
		text: `Dear ${name}, Thanks for reaching out via my personal website! I'll do my best to get back to you as soon as I can. For reference, here's the original message you sent: ${message}. Thanks again for your message! Best wishes, Brody`,
		html: `Dear ${name},<br /><br />Thanks for reaching out via my personal website! I'll do my best to get back to you as soon as I can.<br /><br />For reference, here's the original message you sent:<br /><br /><i>${message}</i><br /><br />Thanks again for your message!<br />Best wishes,<br /><br />Brody`
	};

	await sgMail.send(messageToMe);
	await sgMail.send(confirmationMessage);
};
