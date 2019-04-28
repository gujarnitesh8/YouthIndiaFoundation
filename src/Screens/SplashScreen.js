
// <<<<<<<<<<<<----------- LIBRARIES ----------->>>>>>>>>>>>>

import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView, SafeAreaView, Image, TextInput, ScrollView, AsyncStorage, TouchableOpacity, StatusBar, ImageBackground } from "react-native";
import DeviceInfo from "react-native-device-info";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackActions, NavigationActions } from "react-navigation";

// <<<<<<<<<<<<----------- ASSETS ----------->>>>>>>>>>>>>

import { Images, Matrics, Color } from "../../src/Config";
// import APICaller, { serUserInfo, getUserInfo, getAccessKey, setAccessKey } from "../../Service/APIService";
// import { isTesting, DeviceToken } from "../../../Service/Constant";
// import { LoadWheel } from "../../Components/loadWheel";

// <<<<<<<<<<<<----------- VARIABLES DECLARATION ----------->>>>>>>>>>>>>

// <<<<<<<<<<<<----------- CLASS DECLARATION ----------->>>>>>>>>>>>>

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    // <<<<<<<<<<<<----------- STATE INITIALISATION ----------->>>>>>>>>>>>>

    this.state = {
      deviceToken: "",
      username: "",
      password: "",
      showLoader: false,

      errorOnTextField: "",
      errorMsg: ""
    };
  }

  // <<<<<<<<<<<<----------- LIFECYCLE METHODS ----------->>>>>>>>>>>>>

  componentWillMount() {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      });
      this.props.navigation.dispatch(resetAction);
    }, 2000);
  }

  componentDidMount() {

  }

  // <<<<<<<<<<<<----------- CONTROLLERS & FUNCTIONS ----------->>>>>>>>>>>>>


  // <<<<<<<<<<<<----------- RENDER METHOD ----------->>>>>>>>>>>>>

  render() {
    return (
      <View style={{ backgroundColor: Color.BACKGROUND, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ color: Color.APPCOLOR, fontSize: 30, fontWeight: '600' }}>Youth India</Text>
      </View>

    );
  }
}

// <<<<<<<<<<<<----------- STYLE DECLARATION  ----------->>>>>>>>>>>>>

const Styles = {

};
