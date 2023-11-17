import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.myclub.defaultapp',
  appName: 'myclub',
  webDir: 'www',
  bundledWebRuntime: false,
    android: {
       buildOptions: {
          keystorePath: 'undefined',
          keystoreAlias: 'undefined',
       }
    }
  };

export default config;
