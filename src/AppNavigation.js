import React from "react";
import { View, Image, Platform, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import LoginScreen from "./Screens/Login/LoginScreen";
import Splash from "./Screens/SplashScreen";
import HomeScreen from "./Screens/Home/HomeScreen";
// import SearchScreen from "./Screens/Search/SearchScreen";
// import ActivityDashboardScreen from "./Screens/Activities/ActivityDashboardScreen";
// import ChallangesScreen from "./Screens/Challanges/ChallangesScreen";
// import ProfileScreen from "./Screens/Profile/ProfileScreen";
// import NavScreen from "./Screens/NavScreen";
// import SignUpScreen from "./Screens/SignUp/SignupScreen";
// import ForgotPasswordScreen from "./Screens/ForgotPassword/ForgotPasswordScreen";
// import { Color, Images } from "./Config";
// import CommentsScreen from "./Screens/Comments/Comments";
// import NotificationScreen from "./Screens/Notification/Notification";
// import MessagesScreen from "./Screens/Messages/Messages";
// import UserProfileScreen from "./Screens/UserProfile/UserProfile";
// import PostDetailsScreen from "./Screens/PostDetails/PostDetails";
// import CategoryScreen from "./Screens/Search/CategoryScreen";
// import RelevanceScreen from "./Screens/Search/RelavanceScreen";
// import EditProfileScreen from "./Screens/Profile/EditProfile";
// import OptionsScreen from "./Screens/Profile/OptionsScreen";
// import InboxScreen from "./Screens/Messages/InboxScreen";
// import ImageCropperScreen from "./Screens/Activities/ImageCropper";
// import FollowingScreen from "./Screens/UserProfile/FollowingScreen";
// import FollowerScreen from "./Screens/UserProfile/FollowersScreen";
// // import TestScreen from "./Screens/TestScreen";
// import LikeListScreen from "./Screens/PostDetails/LikeList";

// const TabNavigation = createBottomTabNavigator(
//   {
//     Home: {
//       screen: createStackNavigator(
//         {
//           // Home: {
//           //   screen: TestScreen,
//           //   navigationOptions: {
//           //     header: null
//           //   }
//           // },
//           Home: {
//             screen: HomeScreen,
//             navigationOptions: {
//               header: null
//             }
//           },
//           Notification: {
//             screen: NotificationScreen,
//             navigationOptions: {
//               header: null
//             }
//           }
//         },
//         {
//           initialRouteName: "Home"
//         }
//       ),
//       navigationOptions: ({ navigation, screenProps }) => ({
//         tabBarIcon: ({ tintColor }) => (
//           <Image
//             source={Images.Home}
//             style={{ tintColor, height: 27, width: 31 }}
//           />
//         ),
//         tabBarOnPress: async (scene, jumpToIndex) => {
//           console.log(scene);
//           if (navigation.isFocused()) {
//             navigation.navigate("Home", { scrollTop: true });
//           } else {
//             // if (screenProps.onRefresh) {
//             //   await screenProps.onRefresh();
//             //   navigation.navigate("Home");
//             // } else {
//             navigation.navigate("Home");
//             // }
//           }
//         }
//       })
//     },
//     Search: {
//       screen: createStackNavigator(
//         {
//           SearchScreen: {
//             screen: SearchScreen,
//             navigationOptions: ({ navigation }) => ({
//               header: null,
//               tabBarVisible: () => {
//                 console.log(navigation, "TABBAR");
//               }
//             })
//           },
//           Notification: {
//             screen: NotificationScreen,
//             navigationOptions: {
//               header: null
//             }
//           }
//         },
//         {
//           initialRouteName: "SearchScreen"
//         }
//       ),
//       navigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ tintColor }) => (
//           <Image
//             source={Images.Search}
//             style={{ tintColor, height: 27, width: 27 }}
//           />
//         ),
//         tabBarOnPress: (scene, jumpToIndex) => {
//           console.log(navigation, "NAV");
//           if (navigation.isFocused()) {
//             navigation.navigate("SearchScreen", { setFocus: true });
//           } else {
//             navigation.navigate("SearchScreen", { setFocus: false });
//           }
//         }
//       })
//     },
//     Activity: {
//       screen: ActivityDashboardScreen,
//       navigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ tintColor }) => (
//           <Image
//             source={Images.Activity}
//             style={{ tintColor, height: 30, width: 40 }}
//           />
//         ),
//         tabBarOnPress: (scene, jumpToIndex) => {
//           console.log(scene);
//           navigation.navigate(scene.navigation.state.key, { changes: true });
//         }
//       })
//     },
//     Challanges: {
//       screen: ChallangesScreen,
//       navigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ tintColor }) => (
//           <Image
//             source={Images.Challanges}
//             style={{ tintColor, height: 25, width: 30 }}
//           />
//         )
//       })
//     },
//     Profile: {
//       screen: createStackNavigator(
//         {
//           ProfileScreen: {
//             screen: ProfileScreen,
//             navigationOptions: {
//               header: null
//             }
//           },
//           EditProfie: {
//             screen: EditProfileScreen,
//             navigationOptions: {
//               header: null
//             }
//           }
//         },
//         {
//           initialRouteName: "ProfileScreen"
//         }
//       ),
//       navigationOptions: ({ navigation, screenProps }) => ({
//         tabBarIcon: ({ tintColor }) => (
//           <Image
//             source={Images.Profile}
//             style={{ tintColor, height: 28, width: 25 }}
//           />
//         ),
//         tabBarOnPress: async (scene, jumpToIndex) => {
//           console.log(screenProps, "TEST");
//           // if (navigation.isFocused()) {
//           // } else {
//           //   if (screenProps.onRefresh) {
//           //     await screenProps.onRefresh();
//           //     navigation.navigate("ProfileScreen");
//           //   } else {
//           //     navigation.navigate("ProfileScreen");
//           //   }
//           // }

//           if (navigation.isFocused()) {
//             navigation.navigate("ProfileScreen", { scrollTop: true });
//           } else {
//             if (screenProps.onRefresh) {
//               await screenProps.onRefresh();
//               navigation.navigate("ProfileScreen");
//             } else {
//               navigation.navigate("ProfileScreen");
//             }
//           }
//         }
//       })
//     }
//   },
//   {
//     tabBarPosition: "bottom",
//     swipeEnabled: false,
//     // gesturesEnabled: false,
//     tabBarOptions: {
//       showIcon: true,
//       showLabel: false,
//       tabStyle: { marginTop: Platform.OS === "ios" ? 0 : 0 },
//       style: { backgroundColor: Color.TAB_BG, height: 60 },
//       activeTintColor: Color.APPCOLOR,
//       inactiveTintColor: Color.GREY_LIGHT
//     },
//     initialRouteName: "Home"
//   }
// );

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
        // gesturesEnabled: false,
      }
    },
    // NavScreen: {
    //   screen: NavScreen,
    //   navigationOptions: {
    //     header: null
    //     // gesturesEnabled: false,
    //   }
    // },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
        // gesturesEnabled: false,
      }
    },
    // SignUp: {
    //   screen: SignUpScreen,
    //   navigationOptions: {
    //     header: null
    //     // gesturesEnabled: false,
    //   }
    // },
    // TabNavigation: {
    //   screen: TabNavigation,
    //   navigationOptions: {
    //     header: null,
    //     gesturesEnabled: false
    //   }
    // },
    // ForgotPassword: {
    //   screen: ForgotPasswordScreen,
    //   navigationOptions: {
    //     header: null
    //     // gesturesEnabled: false,
    //   }
    // },
    // Comments: {
    //   screen: CommentsScreen,
    //   navigationOptions: {
    //     header: null
    //     // gesturesEnabled: false,
    //   }
    // },
    // Messages: {
    //   screen: MessagesScreen,
    //   navigationOptions: {
    //     header: null
    //     // gesturesEnabled: true
    //   }
    // },
    // EditProfie: {
    //   screen: EditProfileScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // OptionsScreen: {
    //   screen: OptionsScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // UserProfile: {
    //   screen: UserProfileScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // InboxScreen: {
    //   screen: InboxScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // ImageCropper: {
    //   screen: ImageCropperScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // FollowingScreen: {
    //   screen: FollowingScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // FollowerScreen: {
    //   screen: FollowerScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // LikeListScreen: {
    //   screen: LikeListScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // PostDetails: {
    //   screen: PostDetailsScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // }
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(AppNavigator);
