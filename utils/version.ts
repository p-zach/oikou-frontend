import * as Application from 'expo-application';
import { Platform } from 'react-native';

// Must manually keep in sync with app.json version
// TODO: Use a build script to read from app.json and inject as environment variable
const WEB_VERSION = "0.1.0"

export const getAppVersion = () => {
  if (Platform.OS === "web")
    return WEB_VERSION;
  return Application.nativeApplicationVersion;
};