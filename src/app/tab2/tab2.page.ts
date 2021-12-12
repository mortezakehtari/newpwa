import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  artists:[]=[]
  constructor(private http:HttpClient) {
    this.onGetNews();
  }
  onGetNews(){
    let url ='https://api-v2.soundcloud.com/search/queries?q=j&client_id=jdhj09mFfEyGQTY6Y3vHmfHisv9NpPUD&limit=10&offset=0&linked_partitioning=1&app_version=1612537171&app_locale=en'
    this.http.get(url).subscribe(
      result=>{
        this.artists = result['collection']
      }
    )
  }
}
