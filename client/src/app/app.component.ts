import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gameplay Matchmaker';
  user: any;
  userProfile: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Get data from Web Service
    // this.http.get('https://localhost')
  }

}
