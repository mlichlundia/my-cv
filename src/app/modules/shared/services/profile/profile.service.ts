import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { GlobalVariables } from 'src/constants';
import { Profile } from 'src/interfaces/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileApi: string = GlobalVariables.apiURL + 'profile';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.profileApi).pipe(retry(3));
  }

  setProfile(data: Profile, headers?: HttpHeaders): Observable<Profile> {
    return this.http.post<Profile>(this.profileApi, data, {headers: headers});
  }
}
