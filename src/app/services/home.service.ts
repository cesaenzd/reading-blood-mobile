import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResponse {
    image: string;
    all: number;
    red: number;
    white: number;
}

export interface ApiRequest {
    image: string;
}

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor(private http: HttpClient) { }

    httpHeader = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    sendImage(json: ApiRequest): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${environment.baseUrl}/api_process_image`, JSON.stringify(json), this.httpHeader);
    }
}