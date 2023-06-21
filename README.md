# Ionic Test

This ionic starter project is a broken one that needs to be fixed by you.

## Advise

- take the test on a Apple device if you can because some tasks are easier if you can use Xcode
- make sure to have the local environment properly setup for Ionic development
- be prepared to run and debug Ionic app on iOS simulators or devices
- be prepared to run and debug Ionic app on Android emulators or devices

## Instruction for the native side:

- Change App Id to: `com.oink.ionicapp`
- Change App Name to: `Oink Ionic App`
- Allow logging in production build
- Android background colour: `#ffffff`
- iOS background colour: `#000000`
- iOS App Scheme: `oink`
- Add plugin @capacitor/device
- Add plugin @capacitor/geolocation
- Add plugin cordova-plugin-telerik-imagepicker

## Instruction for the web side:

- Check the TypeScript files for tab1, tab2 and tab3 for TODO's
- Tab1 asks you to get device info via a Capacitor Plugin (complexity: easy)
- Tab2 asks you to get geo location data via a Capcitor Plugin (complexity: difficult)
- Tab3 asks you to get images from the photo library via a Cordova plugin (complexity: medium)

## Hints:

- Use `npm run test:watch` for running test during development
- Check the minimum Ionic 6 native requirements for web browsers, minimum iOS version requirements
- Check the iOS Scheme is set correctly via Xcode
- Check Permissions are actually the correct one mentioned in the plugins web site
- Check test/test-helpers.ts for help with Capacitor plugin unit testing
- Check tab's spec files to see which lifecycle method to use and some other hints how to implement the feature request
- Finish the capcitor.config.ts changes before adding the native platforms
- Don't forget to catch errors
- Check that all required npm packages are in the dependencies
- Check that imports are using the correct path
- Know how to use and mock Capacitor plugins
- Know how to use and mock Cordova plugins
