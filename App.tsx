import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Alert, Platform
} from 'react-native';
import Product from './src/screens/product';
import messaging from '@react-native-firebase/messaging';
import { fcmService } from './src/services/FCMService';
import { notificationService } from './src/services/NotificationService';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';


const App=()=> {
  const [fcmToken, setFcmToken]=useState<String>("NULL");

  // useEffect(() => {
  //   requestNotificationPermission().then(()=>{
  //     fcmService.register(onRegister, onNotification, onOpenNotification);
  //       notificationService.configure(onOpenNotification);
  //   }).catch((error) => {
  //     console.log('Notification permission request failed: ', error);
  //   });
  //   return () => {
  //     fcmService.deleteToken();
  //   };
  // }, []);

  // const onRegister = (token:any) => {
  //   console.log('[App] onRegister: ', token);
  // };

  // const onNotification = (notify:any) => {
  //   console.log('[App] onNotification: ', notify);

  //   const title = notify.notification?.title || 'No Title';
  //   const body = notify.notification?.body || 'No Body';
    
  //   const options = {
  //     soundName: 'default',
  //     playSound: true,
  //     channelId: "default-channel-id", // Ensure that this matches the channelId created earlier
  //   };

  //   notificationService.showNotification(
  //     1,
  //     title,
  //     body,
  //     notify,
  //     options
  //   );
  // };
  // const onOpenNotification = (notify:any) => {
  //   console.log('[App] onOpenNotification: ', notify);
  //   const notification =notify.item.notification || notify.notification ;
  //   const title = notification.title || 'No title';
  //   const body = notification.body || 'No body';
  //   Alert.alert(`Title: ${title}\nBody: ${body}`);
  // };

  // async function requestNotificationPermission() {
  //   let permission;
  //   if (Platform.OS === 'ios') {
  //     permission = PERMISSIONS.IOS.NOTIFICATIONS;
  //   } else if (Platform.OS === 'android') {
  //     permission = PERMISSIONS.ANDROID.POST_NOTIFICATIONS;
  //   }
  
  //   const result = await check(permission);
  //   switch (result) {
  //     case RESULTS.UNAVAILABLE:
  //       console.log('This feature is not available (on this device / in this context)');
  //       break;
  //     case RESULTS.DENIED:
  //       console.log('The permission has not been requested / is denied but requestable');
  //       const requestResult = await request(permission);
  //       if (requestResult === RESULTS.GRANTED) {
  //         console.log('The permission is granted');
  //         await messaging().registerDeviceForRemoteMessages();
  //         await messaging().requestPermission();
  //       } else {
  //         console.log('The permission is denied');
  //       }
  //       break;
  //     case RESULTS.LIMITED:
  //       console.log('The permission is limited: some actions are possible');
  //       break;
  //     case RESULTS.GRANTED:
  //       console.log('The permission is granted');
  //       await messaging().registerDeviceForRemoteMessages();
  //       await messaging().requestPermission();
  //       break;
  //     case RESULTS.BLOCKED:
  //       console.log('The permission is denied and not requestable anymore');
  //       Alert.alert(
  //         'Notification Permission',
  //         'Notification permission is denied and cannot be requested. Please enable it in the app settings.',
  //         [{ text: 'OK' }]
  //       );
  //       break;
  //   }
  // }

  return (
    <SafeAreaView >
      <Product/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
