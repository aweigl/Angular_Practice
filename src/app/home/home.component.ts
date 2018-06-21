import { Component, OnInit } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  apiRoot: string = "https://swapi.co/api";
  max: number = Math.ceil(1);
  min: number = Math.floor(10);
  info: any;

  constructor(private http: Http) {}

  ngOnInit() {}

  getPerson() {
    let number = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    this.http.get(`${this.apiRoot}/people/${number}`).subscribe(res => {
      console.log(res.json());
      this.info = res.json();
    });
  }
}
