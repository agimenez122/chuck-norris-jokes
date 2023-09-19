import { Component } from '@angular/core';
import { ChuckNorrisApiService } from '../services/chuck-norris-api.service'
import { AdsServiceService } from '../services/ads-service.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  joke!:string

  constructor( public chuckNorrisApiService:ChuckNorrisApiService, public adsServiceService:AdsServiceService ) {
    this.adsServiceService.banner()
    this.chuckNorrisApiService.getJoke().then(res=>{ 
      this.joke=res.data.value
    })
  }
  nextJoke(){ this.chuckNorrisApiService.getJoke().then(res=>{ 
    this.joke=res.data.value 
  })
 }
}
