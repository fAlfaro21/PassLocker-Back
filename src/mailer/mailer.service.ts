import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { SendEmailDto } from './interface/mail.interface';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailerService {

    constructor( private readonly configService: ConfigService ){};

    mailTransport(){
        const transporter = nodemailer.createTransport({
            host: this.configService.get<string>('MAIL_HOST'),
            port: this.configService.get<number>('MAIL_HOST'),
            secure: false, 
            auth: {
              user: this.configService.get<string>('MAIL_USER'),
              pass: this.configService.get<string>('MAIL_PASSWORD'),
            },
        });

        return transporter;
    }

    async sendMail( sendEmailDto: SendEmailDto ){
        const { from, recipient, subject, html, placeholderReplacements } = sendEmailDto;
        const transport = this.mailTransport();
        const options: Mail.Options = {
            from: from ?? {
                name: this.configService.get<string>('APP_NAME'),
                address: this.configService.get<string>('DEFAULT_EMAIL_ADDRESS'),
            },
            to: recipient,
            subject,
            html,
        };
        try {
            const result = await transport.sendMail(options)
            return result;
        } catch (error) {
            console.log('Error: ', error);
        }
    }
    
    
    


}
