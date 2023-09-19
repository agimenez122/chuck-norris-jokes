import { Injectable } from '@angular/core';
import  axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisApiService {

  constructor() { }

  async getJoke(){
    return await axios.get("https://api.chucknorris.io/jokes/random",{})
  }
}
