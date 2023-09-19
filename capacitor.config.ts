import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'chuck.norris.jokes',
  appName: 'Chuck Norris Jokes',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
