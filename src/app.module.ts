import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { UploadModule } from "./upload/upload.module";
import { ProductsModule } from "./products/products.module";

import { CheckoutModule } from "./checkout/checkout.module";
import { NotificationsModule } from "./notifications/notifications.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://juniordias:4xnayCrhXmy6XEor@cluster0.b7w3c.mongodb.net/"
    ),
    UsersModule,
    AuthModule,
    UploadModule,
    ProductsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CheckoutModule,
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
