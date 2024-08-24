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
      keystorePath: "KeyStore",
      keystoreAlias: "myclub",
    },
  },
  plugins: {
    Badge: {
      persist: true,
      autoClear: false,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
  // Add this:
  ios: {
    scheme: "App",
  },
  // ios: {
  //   contentInset: "always"
  // }
};

export default config;
