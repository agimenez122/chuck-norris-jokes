import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'chuck.norris.jokes',
  appName: 'chuck-norris-jokes',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
