/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Basic Components
/* 
View: The most fundamental component for building a UI.
Text: A component for displaying text.
Image: A component for displaying images.
TextInput: A component for inputting text into the app via a keyboard.
ScrollView: Provides a scrolling container that can host multiple components and views.
StyleSheets: Provides an abstraction layer similar to CSS stylesheets.
*/

// User Interface
/*
Button: A basic button component for handling touches that should render nicely on any platform.
Picker: Renders native picker component for Android and iOS.
Slider: A component used to select a singlr value from a range of values.
Switch: Renders a boolean input.
*/

// List Views
/*
FlatList: A component for rendering performant scrollable lists.
SectionList: Like FlatList but for sectioned lists.
*/

// iOS Component and APIs
/*
ActionSheetIOS: API to display an iOS action sheet or share sheet.
AlertIOS: Create an iOS alert dialog with a message or create a prompt for user input.
DatePickerIOS: Renders a date/time picker(selector) on iOS.
ImagePicker: Renders an image picker on the iOS.
NavigatorIOS: A wrapper around UINavigationController, enabling you to implement a navigate .
ProgressViewIOS: Renders ProgressView on iOS.
PushNotificationIOS: Handle push notifications for your app, including permission handling and icon badge number.
SegmentedControlIOS: Renders SegmentedControl on iOS.
TabBarIOS: Renders UITabViewController on iOS, Used with TabBarIOS.Item.
*/

// Android Components and APIs
/*
BackHandler: Detect hardware button presses for back navigation.
DatePickerAndroid: Opens the standard date picker dialog.
DrawerLayoutAndroid: Renders a DrawerLayout on Android.
PermissionAndroid: Provides access to permission model introduced by ndroid M.
ProgressBarAndroid: Renders a ProgressBar on Android.
TimePickerAndroid: Opens the standard time picker dialog.
ToastAndroid: Creates an Android toast alert.
ToolbarAndroid: Renders a ToolBar on Android.
ViewPagerAndroid: Container that allows you to flip left and right between child views.
*/

//Other APIs
/*
ActivityIndicator: Displays a circular loading indicator.
Alert: Launches an alert dialog with the specified title and message.
Animated: A library for creating fluid, powerful animations.
CameraRoll: Provides access to the local camera roll or gallery.
Clipboard: Provides an interface for setting and getting content from clipboard on both iOS and Android.
Dimensions: Provides an interface for getting devices dimensions.
KeyboardAvoidingView: Provides a view that moves out of the way of the virtual keyboard automatically.
Linking: Provides a general interface to interact with both incoming and outgoing app links.
Modal: Provides a simple way to present content above an enclosing view.
PixelRatio: Provides access to the device pixel density.
RefreshControl: This component is used inside a  ScrollView to add pull or refresh functionality.
StatusBar: A component to control the App status bar.
WebView: A component that renders web content in native view.
*/
