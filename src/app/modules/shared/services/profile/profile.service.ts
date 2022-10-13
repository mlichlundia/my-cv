import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Profile } from 'src/interfaces/profile';
import { Observable } from 'rxjs';
import {BASE_URL} from "../../constants/url";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileApi: string = BASE_URL  + 'profile';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.profileApi).pipe(retry(3));
  }

  setProfile(data: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.profileApi, data);
  }
}
