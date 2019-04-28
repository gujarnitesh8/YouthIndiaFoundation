import React, { Component } from "react";
import {
  NetInfo,
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";
import AppNavigation from "./AppNavigation";
// import firebase, {
//   Notification,
//   NotificationOpen
// } from "react-native-firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.userData = [];
    this.state = {
      userTitle: "",
      refresh: false
    };
  }
  onRefresh() {
    this.setState({ refresh: true });
  }
  resetRefresh() {
    this.setState({ refresh: false });
  }
  componentWillMount() {
    // this.getToken();
    // this.getNotification();
    // this.onNotificationPress();
  }
  componentDidMount() {
    // const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
    // .setDescription('My apps test channel');
    // firebase.notifications().android.createChannel(channel);  
  }
  //==========================Notification function==============//
  // getToken() {
  //   console.log("calll------>");
  //   firebase
  //     .messaging()
  //     .hasPermission()
  //     .then(enabled => {
  //       if (enabled) {
  //         firebase
  //           .messaging()
  //           .getToken()
  //           .then(async fcmToken => {
  //             if (fcmToken) {
  //               global.fcmDeviceToken = fcmToken;
  //               console.log(global.fcmDeviceToken);
  //               await AsyncStorage.setItem("fcmToken", fcmToken);
  //               console.log(AsyncStorage.getItem("fcmToken"));
  //             } else {
  //               console.log(
  //                 "You will not recieve notifications from Daretake App!"
  //               );
  //             }
  //           });
  //       } else {
  //         firebase
  //           .messaging()
  //           .requestPermission()
  //           .then(enabled => {
  //             firebase
  //               .messaging()
  //               .getToken()
  //               .then(async fcmToken => {
  //                 if (fcmToken) {
  //                   console.log(fcmToken);
  //                   console.warn(fcmToken);
  //                   global.fcmDeviceToken = fcmToken;
  //                   await AsyncStorage.setItem("fcmToken", fcmToken);
  //                 } else {
  //                   console.log(
  //                     "You will not recieve notifications from Daretake App!"
  //                   );
  //                 }
  //               });
  //           })
  //           .catch(error => {
  //             console.log(
  //               "You will not recieve notifications from Daretake App!",
  //               error
  //             );
  //           });
  //       }
  //     });
  // }

  getNotification() {
    // firebase
    //   .notifications()
    //   .getInitialNotification()
    //   .then(notification => {
    //     firebase.messaging().createLocalNotification({
    //       title: "My Notification Title",
    //       body: "My Notification Message",
    //       sound: "default",
    //       priority: "high",
    //       click_action: "ACTION",
    //       icon: "ic_launcher",
    //       show_in_foreground: true,
    //     });
    //     console.log("INITIAL NOTIFICATION", notification);
    //   });
  }

  // onNotificationPress() {
  //   firebase.notifications().onNotificationOpened(notificationOpen => {
  //     console.log("..............****.............****................");
  //     console.log(notificationOpen);
  //   });
  // }
  render() {
    return (
      // <AppNavigation screenProps/>
      <AppNavigation
        screenProps={{
          onRefresh: this.onRefresh.bind(this),
          resetRefresh: this.resetRefresh.bind(this),
          refreshValue: this.state.refresh
        }}
      />
      // <View style={{ flex: 1 }}><Text>testy</Text></View>
    );
  }
}
