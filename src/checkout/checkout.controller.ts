import { Controller, Post, Body } from "@nestjs/common";
import { CheckoutService } from "./checkout.service";

@Controller("checkout")
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  async createPaymentIntent(
    @Body("amount") amount: number,
    @Body("currency") currency: string
  ) {
    return this.checkoutService.createPaymentIntent(amount, currency);
  }
}
