import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";
import messaging from "@react-native-firebase/messaging";

@Injectable()
export class NotificationsService {
  async getToken() {
    const token = await admin
      .messaging()
      .app.options.credential.getAccessToken();
    return token;
  }

  async sendPushNotification(
    token: string,
    title: string,
    body: string,
    data?: Record<string, string>
  ) {
    const message = {
      notification: { title, body },
      token,
      data: data || {},
    };

    try {
      const response = await admin.messaging().send(message);
      console.log("Push notification sent successfully:", response);

      return { success: true, response };
    } catch (error) {
      console.error("Error sending push notification:", error);

      return { success: false, error: error.message };
    }
  }
}
