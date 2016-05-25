# ReactNativeDemo

a reactnative project template.

To run:
npm install
adb devices
react-native run-android
adb reverse tcp:8081 tcp:8081
keytool -genkey -v -keystore my-release-key.keystore  -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
gradlew assembleRelease						#~/android