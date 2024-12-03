import { Controller, Post, Body, Get } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";

interface SendoPushNotificationProps {
  token: string;
  title: string;
  message: string;
  data?: Record<string, string>;
}

@Controller("notifications")
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get("token")
  getToken() {
    return this.notificationsService.getToken();
  }

  @Post("push")
  async sendPushNotification(
    @Body()
    body: SendoPushNotificationProps
  ) {
    const { token, title, message, data } = body;

    return await this.notificationsService.sendPushNotification(
      token,
      title,
      message,
      data
    );
  }
}
