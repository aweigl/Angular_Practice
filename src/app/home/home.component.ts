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
    info_films: any;
    planetInfo: any;
    film_title: any;

    constructor(private http: Http) {}

    ngOnInit() {}

    getPerson() {
        const number =
            Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.http.get(`${this.apiRoot}/people/${number}`).subscribe(res => {
            if (res.json().films) {
                this.info_films = res.json().films;
                this.getFilms();
            }
            if (res.json().homeworld) {
                this.planetInfo = res.json().homeworld;
                this.getPlanet();
            }
            this.info = res.json();
            console.log(
                this.info,
                this.info_films,
                this.planetInfo,
                this.film_title
            );
        });
    }
    getFilms() {
        this.film_title = [];
        this.info_films.forEach(item => {
            this.http.get(item).subscribe(res => {
                this.film_title.push(res.json().title);
            });
        });
    }

    getPlanet() {
        const number =
            Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.http.get(`${this.apiRoot}/planets/${number}`).subscribe(res => {
            this.planetInfo = res.json();
        });
    }
}
