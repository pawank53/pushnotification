import messaging from '@react-native-firebase/messaging';

class FCMService {
  register(onRegister, onNotification, onOpenNotification) {
    this.checkPermission(onRegister);
    this.createNotificationListeners(onRegister, onNotification, onOpenNotification);
  }

  async checkPermission(onRegister) {
    const enabled = await messaging().hasPermission();
    console.log("checkPermission:"+ enabled);
    if (enabled) {
      this.getToken(onRegister);
    } else {
      this.requestPermission(onRegister);
    }
  }

  async getToken(onRegister) {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      onRegister(fcmToken);
    }
  }

  async requestPermission(onRegister) {
    try {
      await messaging().requestPermission();
      this.getToken(onRegister);
    } catch (error) {
      console.log('Permission rejected');
    }
  }

  deleteToken() {
    messaging().deleteToken();
  }

  createNotificationListeners(onRegister, onNotification, onOpenNotification) {
    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage) {
        onOpenNotification(remoteMessage);
      }
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          onOpenNotification(remoteMessage);
        }
      });

    messaging().onMessage(async remoteMessage => {
      if (remoteMessage) {
        onNotification(remoteMessage);
      }
    });

    messaging().onTokenRefresh(fcmToken => {
      onRegister(fcmToken);
    });
  }
}

export const fcmService = new FCMService();
