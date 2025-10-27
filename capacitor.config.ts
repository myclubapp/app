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
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    GoogleMaps: {
      androidKey: "AIzaSyAM5x9P0syj9qtxUmFs98nW0B967xo52Fw",
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
