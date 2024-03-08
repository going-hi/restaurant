import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SmsAero, SmsAeroError, SmsAeroHTTPError } from 'smsaero';

@Injectable()
export class SmsService {
    client
    constructor(
        configService: ConfigService
    ) {
        this.client = new SmsAero('goinghiggvp@gmail.com', 'aGw9fz9N936r0sAkUh3KsuKhyWNBTzaA');
    }

    async sendSms(code: number, to: number) {
        try {
            const text = `Ваш код подтверждения для Higni ${code}`
            const response = await this.client.send(code, text);
            console.log(response);
          } catch (error) {
            if (error instanceof SmsAeroError) {
              console.error('Не удалось из-за ошибки SmsAero:', error.message);
            } else if (error instanceof SmsAeroHTTPError) {
              console.error('Не удалось из-за HTTP ошибки:', error.message);
            } else {
              console.error('Произошла неизвестная ошибка:', error);
            }
          }
    }
}
