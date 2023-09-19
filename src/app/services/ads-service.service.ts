import { Injectable } from '@angular/core';
import { 
  AdMob,  BannerAdOptions, BannerAdSize, BannerAdPosition, AdLoadInfo, BannerAdPluginEvents, 
  AdMobBannerSize } from '@capacitor-community/admob';


@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {

  constructor() { }

  initialize(){
    AdMob.initialize({})
  }
  

  banner() {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      // Subscribe Banner Event Listener
    });
  
    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size: AdMobBannerSize) => {
      // Subscribe Change Banner Size
    });
  
    const options: BannerAdOptions = {
      adId: "ca-app-pub-9669223673392187/3914778059",
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      // isTesting: true
      // npa: true
    };
    AdMob.showBanner(options);
  }
  

}
