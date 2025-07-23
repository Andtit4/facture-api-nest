import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { CustomerModule } from './modules/customers/customer.module';
import { UserModule } from './modules/users/user.module';
import { InvoiceModule } from './modules/invoices/invoice.module';
import { ProductModule } from './modules/products/product.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    UserModule,
    CustomerModule,
    InvoiceModule,
    ProductModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
