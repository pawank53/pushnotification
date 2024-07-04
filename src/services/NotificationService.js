import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

class NotificationService {
  configure(onOpenNotification) {
    PushNotification.configure({
      onNotification: function (notification) {
        if (!notification?.data) {
          return;
        }
        onOpenNotification(notification.data);
      },

      requestPermissions: Platform.OS === 'ios'
    });

    if (Platform.OS === 'android') {
        PushNotification.createChannel(
          {
            channelId: "default-channel-id", // (required)
            channelName: "Default channel", // (required)
            channelDescription: "A default channel", // (optional) default: undefined.
            soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
            importance: 4, // (optional) default: 4. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
          },
          (created) => console.log(`createChannel returned '${created}'`)
        );
      }
  }

  showNotification(id, title, message, data = {}, options = {}) {
    PushNotification.localNotification({
      /* Android Only Properties */
      ...this.buildAndroidNotification(id, title, message, data, options),
      /* iOS and Android properties */
      ...this.buildIOSNotification(id, title, message, data, options),
      /* iOS only properties */
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false
    });
  }

  buildAndroidNotification(id, title, message, data = {}, options = {}) {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
      channelId: "default-channel-id", // Ensure that this matches the channelId created earlier
    };
  }

  buildIOSNotification(id, title, message, data = {}, options = {}) {
    return {
      alertAction: options.alertAction || 'view',
      category: options.category || '',
      userInfo: {
        id: id,
        item: data
      }
    };
  }

  cancelAllLocalNotifications() {
    if (Platform.OS === 'ios') {
      PushNotification.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  }
}

export const notificationService = new NotificationService();
