import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './interface/mail.interface';

@Controller('mailer')
export class MailerController {

  constructor(private readonly mailerService: MailerService) {}

  @Post('send-email')
  async sendMail(){

    const dto: SendEmailDto = {
      from: { name: 'Lucy', address: 'lucy@example.com' },
      recipient: { name: 'John Doe', address: 'john@example.com'},
      subject: 'Confirm your email',
      html: `<!DOCTYPE html>
      <html>
      <head>
      <style>
      .plan {
        border-radius: 16px;
        box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
        padding: 10px;
        background-color: #fff;
        color: #697e91;
        max-width: 300px;
      }
      
      .plan strong {
        font-weight: 600;
        color: #425275;
      }
      
      .plan .inner {
        align-items: center;
        padding: 20px;
        padding-top: 40px;
        background-color: #ecf0ff;
        border-radius: 12px;
        position: relative;
      }
      
      .plan .pricing {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #bed6fb;
        border-radius: 99em 0 0 99em;
        display: flex;
        align-items: center;
        padding: 0.625em 0.75em;
        font-size: 1.25rem;
        font-weight: 600;
        color: #425475;
      }
      
      .plan .pricing small {
        color: #707a91;
        font-size: 0.75em;
        margin-left: 0.25em;
      }
      
      .plan .title {
        font-weight: 600;
        font-size: 1.25rem;
        color: #425675;
      }
      
      .plan .title + * {
        margin-top: 0.75rem;
      }
      
      .plan .info + * {
        margin-top: 1rem;
      }
      
      .plan .features {
        display: flex;
        flex-direction: column;
      }
      
      .plan .features li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .plan .features li + * {
        margin-top: 0.75rem;
      }
      
      .plan .features .icon {
        background-color: #1FCAC5;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
      }
      
      .plan .features .icon svg {
        width: 14px;
        height: 14px;
      }
      
      .plan .features + * {
        margin-top: 1.25rem;
      }
      
      .plan .action {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
      }
      
      .plan .button {
        background-color: #6558d3;
        border-radius: 6px;
        color: #fff;
        font-weight: 500;
        font-size: 1.125rem;
        text-align: center;
        border: 0;
        outline: 0;
        width: 100%;
        padding: 0.625em 0.75em;
        text-decoration: none;
      }
      
      .plan .button:hover, .plan .button:focus {
        background-color: #4133B7;
      }
      </style>
      </head>
      <body>
      <div class="plan">
<div class="inner">
  <span class="pricing">
    
  </span>
  <p class="title">Confirma tu correo electrónico.</p>
  <p class="info">Gracias por elegir PassLocker para la gestión de tus contraseñas. </p>
  <p class="info">Para acceder y disfrutar del servicio pulse el link o botón mas abajo para confirmar tu cuenta.</p>
  
  <div class="action">
  <a class="button">
    Confirmar mi cuenta
  </a>
  </div>
</div>
</div>
      </body>
      <footer class="footer py-4">
         <div class="container">
             
                 <div class="col-lg-3 text-lg-start">Copyright &copy; PassLocker 2024</div>
             
         </div>
     </footer>
      </html>`,
    }
    return await this.mailerService.sendMail(dto);
    
  }


}
