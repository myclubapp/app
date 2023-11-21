import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.myclub.defaultapp',
  appName: 'myclub',
  webDir: 'www',
  "server": {
    "allowNavigation": ["http://developers.google.com/*"]
  },
  bundledWebRuntime: false,
  android: {
    buildOptions: {
      keystorePath: 'undefined',
      keystoreAlias: 'undefined',
    }
  },
  // ios: {
  //   contentInset: "always"
  // }
};

export default config;
