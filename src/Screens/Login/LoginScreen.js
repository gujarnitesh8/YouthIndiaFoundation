
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

export default class LoginScreen extends Component {
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
        // GoogleSignin.configure({
        //   webClientId:
        //     "310126461670-ljkoh8rv7n8d7agai92is314petk2070.apps.googleusercontent.com",
        //   offlineAccess: false // if you want to access Google API on behalf of the user FROM YOUR SERVER
        // });
    }

    // <<<<<<<<<<<<----------- CONTROLLERS & FUNCTIONS ----------->>>>>>>>>>>>>

    //   onLogin() {
    //     if (this.state.username == "") {
    //       this.setState({ errorOnTextField: 1, errorMsg: "Please enter username" });
    //     } else if (this.state.password == "") {
    //       this.setState({ errorOnTextField: 1, errorMsg: "Please enter password" });
    //     } else {
    //       this.callLogin();
    //     }
    //   }

    //   generateAccessKey(data) {
    //     var postData = { guid: data.data.User.guid };
    //     APICaller("TestEncryption", "POST", "", postData).then(accessKey => {
    //       if (accessKey.encrypted_value != null || accessKey.encrypted_value != undefined) {
    //         setAccessKey(accessKey.encrypted_value);
    //         global.access_key = accessKey.encrypted_value;
    //         const resetAction = StackActions.reset({
    //           index: 0, actions: [NavigationActions.navigate({ routeName: "TabNavigation" })], key: null // THIS LINE
    //         });
    //         this.props.navigation.dispatch(resetAction);
    //       }
    //     });
    // }
    //   callLogin() {
    //     const { token } = "";
    //     const endpoints = "Login";
    //     const method = "POST";
    //     const body = {
    //       user_name_email: this.state.username,
    //       password: this.state.password,
    //       device_token: global.fcmDeviceToken,
    //       device_type: "1",
    //       is_testdata: isTesting,
    //       secret_key: "jnPCgggaDr2UDpNVFQz+KXJ9rWavEop7WW57Lj5XR0o=",
    //       access_key: "nousername"
    //     };
    //     this.setState({ showLoader: true });
    //     console.log(body);
    //     APICaller(endpoints, method, token, body).then(
    //       data => {
    //         if (data.status == "1") {
    //           if (data.data.User != []) {
    //             serUserInfo(data);
    //             this.generateAccessKey(data);
    //             this.setState({ showLoader: false });
    //           } else {
    //             alert("Something went wrong");
    //             this.setState({ showLoader: false });
    //           }
    //         } else if (data.status == "2") {
    //           alert("Multiple Login Detected");
    //           this.setState({ showLoader: false });
    //         } else if (data.status == "0") {
    //           alert(data.message);
    //           this.setState({ showLoader: false });
    //         }
    //       },
    //       err => {
    //         this.setState({ showLoader: false });
    //         console.log(err);
    //       }
    //     );
    //   }
    //   callLoginWithGoogle(userData) {
    //     this.setState({ showLoader: true });
    //     const { token } = "";
    //     const endpoints = "LoginWithGoogle";
    //     const method = "POST";
    //     var firstName = userData.name.split(" ").slice(0, -1).join(" ");
    //     var lastName = userData.name.split(" ").slice(-1).join(" ");
    //     const body = {
    //       first_name: firstName,
    //       last_name: lastName,
    //       profile_image: userData.photo,
    //       device_token: global.fcmDeviceToken,
    //       device_type: "1",
    //       is_testdata: isTesting,
    //       google_id: userData.id,
    //       secret_key: "jnPCgggaDr2UDpNVFQz+KXJ9rWavEop7WW57Lj5XR0o=",
    //       access_key: "nousername"
    //     };
    //     APICaller(endpoints, method, token, body).then(
    //       data => {
    //         if (data.status == "1") {
    //           if (data.data.User != []) {
    //             serUserInfo(data);
    //             this.generateAccessKey(data);
    //             this.setState({ showLoader: false });
    //           } else {
    //             alert("Something went wrong");
    //             this.setState({ showLoader: false });
    //           }
    //         } else if (data.status == "2") {
    //           alert("Multiple Login Detected");
    //           this.setState({ showLoader: false });
    //         } else if (data.status == "0") {
    //           alert(data.message);
    //           this.setState({ showLoader: false });
    //         }
    //       },
    //       err => {
    //         this.setState({ showLoader: false });
    //         console.log(err);
    //       }
    //     );
    //   }
    //   gmailLogin = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const info = await GoogleSignin.signIn();
    //       this.callLoginWithGoogle(info.user);
    //     } catch (error) {
    //       alert('Something Went wrong, Please try again later')
    //     }
    //   };
    //   callLoginWithFacebook(data) {
    //     const { token } = "";
    //     const endpoints = "LoginWithFacebook";
    //     const method = "POST";
    //     var firstName = data.name.split(" ").slice(0, -1).join(" ");
    //     var lastName = data.name.split(" ").slice(-1).join(" ");
    //     const body = {
    //       first_name: firstName,
    //       last_name: lastName,
    //       profile_image: data.picture.data.url,
    //       device_token: global.fcmDeviceToken,
    //       device_type: "1",
    //       is_testdata: isTesting,
    //       facebook_id: data.id,
    //       secret_key: "jnPCgggaDr2UDpNVFQz+KXJ9rWavEop7WW57Lj5XR0o=",
    //       access_key: "nousername"
    //     };
    //     APICaller(endpoints, method, token, body).then(
    //       data => {
    //         if (data.status == "1") {
    //           if (data.data.User != []) {
    //             serUserInfo(data);
    //             this.generateAccessKey(data);
    //             this.setState({ showLoader: false });
    //           } else {
    //             alert("Something went wrong");
    //             this.setState({ showLoader: false });
    //           }
    //         } else if (data.status == "2") {
    //           alert("Multiple Login Detected");
    //           this.setState({ showLoader: false });
    //         } else if (data.status == "0") {
    //           alert(data.message);
    //           this.setState({ showLoader: false });
    //         }
    //       },
    //       err => {
    //         this.setState({ showLoader: false });
    //       }
    //     );
    //   }
    //   onFacebookPress() {
    //     LoginManager.logInWithReadPermissions([
    //       "public_profile"
    //     ]).then(result => {
    //       if (result.isCancelled) {
    //       } else {
    //         AccessToken.getCurrentAccessToken().then(data => {
    //           this.setState({ showLoader: true });
    //           fetch(
    //             "https://graph.facebook.com/v2.5/me?fields=email,id,name,picture.type(large)&access_token=" +
    //             data.accessToken.toString()
    //           )
    //             .then(response => response.json())
    //             .then(json => {
    //               this.callLoginWithFacebook(json);
    //             })
    //             .catch(() => {
    //               this.setState({ showLoader: false });
    //             });
    //         });
    //       }
    //     });
    //   }
    // <<<<<<<<<<<<----------- RENDER METHOD ----------->>>>>>>>>>>>>

    render() {
        return (
            <View style={{ backgroundColor: Color.BACKGROUND, flex: 1 }}>
                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder={'Username'}
                        style={Styles.usernameStyle}
                    />
                    <TextInput
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={Styles.passwordStyle}
                    />
                </View>
                <View style={{ flex: 0.4, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ backgroundColor: Color.APPCOLOR, justifyContent: 'center', margin: 5, alignItems: 'center', height: 45, borderRadius: 40, width: '70%' }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Login</Text>
                    </View>

                    <View style={{ backgroundColor: Color.APPCOLOR, justifyContent: 'center', margin: 15, alignItems: 'center', height: 45, borderRadius: 40, width: '70%' }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Sign Up</Text>
                    </View>

                </View>
            </View>
        );
    }
}

// <<<<<<<<<<<<----------- STYLE DECLARATION  ----------->>>>>>>>>>>>>

const Styles = {
    usernameStyle: {
        backgroundColor: Color.WHITE,
        width: '80%',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 0,
        borderBottomEndRadius: 0,
        paddingLeft: 20,
        fontSize: 18,
        margin: 20
    },
    passwordStyle: {
        backgroundColor: Color.WHITE,
        width: '80%',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 0,
        borderBottomEndRadius: 0,
        paddingLeft: 20,
        fontSize: 18,
        margin: 20
    },
};
