
// <<<<<<<<<<<<----------- LIBRARIES ----------->>>>>>>>>>>>>

import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView, SafeAreaView, Image, TextInput, ScrollView, AsyncStorage, TouchableOpacity, StatusBar, ImageBackground } from "react-native";
import DeviceInfo from "react-native-device-info";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackActions, NavigationActions } from "react-navigation";
// import { LoginManager, AccessToken } from "react-native-fbsdk";
// import { GoogleSignin, GoogleSigninButton, statusCodes } from "react-native-google-signin";

// <<<<<<<<<<<<----------- ASSETS ----------->>>>>>>>>>>>>

import { Images, Matrics, Color } from "../../Config";
import APICaller, { serUserInfo, getUserInfo, getAccessKey, setAccessKey } from "../../Service/APIService";
import { isTesting, DeviceToken } from "../../Service/Constant";
// import { LoadWheel } from "../../Components/loadWheel";

// <<<<<<<<<<<<----------- VARIABLES DECLARATION ----------->>>>>>>>>>>>>

// <<<<<<<<<<<<----------- CLASS DECLARATION ----------->>>>>>>>>>>>>

export default class HomeScreen extends Component {
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
  }

  componentDidMount() {
   
  }

  // <<<<<<<<<<<<----------- CONTROLLERS & FUNCTIONS ----------->>>>>>>>>>>>>


  // <<<<<<<<<<<<----------- RENDER METHOD ----------->>>>>>>>>>>>>

  render() {
    return (
        <View style={{backgroundColor:Color.APPCOLOR}}>
            <Text>SplashScreen</Text>
        </View>
   
    );
  }
}

// <<<<<<<<<<<<----------- STYLE DECLARATION  ----------->>>>>>>>>>>>>

const Styles = {
  
};
