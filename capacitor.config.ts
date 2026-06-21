import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.myclub.defaultapp",
  appName: "myclub",
  webDir: "www/browser",
  server: {
    allowNavigation: ["http://developers.google.com/*"],
  },
  android: {
    adjustMarginsForEdgeToEdge: "auto",
    buildOptions: {
      keystorePath: "KeyStore",
      keystoreAlias: "myclub",
    },
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    Geolocation: {
      enableHighAccuracy: true,
    },
    EdgeToEdge: {
      backgroundColor: "#ffffff",
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
