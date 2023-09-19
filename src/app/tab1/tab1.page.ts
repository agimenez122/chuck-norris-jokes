import { Component } from '@angular/core';
import { ChuckNorrisApiService } from '../services/chuck-norris-api.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  joke!:string

  constructor( public chuckNorrisApiService:ChuckNorrisApiService) {

    this.chuckNorrisApiService.getJoke().then(res=>{ 
      this.joke=res.data.value
    })
  }
  nextJoke(){ this.chuckNorrisApiService.getJoke().then(res=>{ 
    this.joke=res.data.value 
  })
 }
}
