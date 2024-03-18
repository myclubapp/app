import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.myclub.defaultapp",
  appName: "myclub",
  webDir: "www/browser",
  server: {
    allowNavigation: ["http://developers.google.com/*"],
  },
  android: {
    buildOptions: {
      keystorePath: "undefined",
      keystoreAlias: "undefined",
    },
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
  // ios: {
  //   contentInset: "always"
  // }
};

export default config;
