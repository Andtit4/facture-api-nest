import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { AuthController } from './auth/auth.controller';
// import { JwtStrategy } from './auth/infrastructure/typeorm/jwt/jwt.strategy';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { CustomerModule } from './modules/customers/customer.module';
import { UserModule } from './modules/users/user.module';
import { InvoiceModule } from './modules/invoices/invoice.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    UserModule,
    CustomerModule,
    InvoiceModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
