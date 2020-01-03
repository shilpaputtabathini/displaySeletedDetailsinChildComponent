import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
     providedIn: 'root'
})

export class GetDetailsServices {
    constructor(private http:HttpClient) {}
    
    baseUrl = '../assets/empDetails.JSON';

    getDetails() {
        return this.http.get(this.baseUrl);
    }
}