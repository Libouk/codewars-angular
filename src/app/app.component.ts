import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codewars-angular';

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    let obs = this.http.get('http://localhost:8000/mumbling');  
    obs.subscribe((response) => console.log(response));
  }
}
