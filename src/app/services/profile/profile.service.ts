import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { GlobalVariables } from 'src/constants';
import { Profile } from 'src/interfaces/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileApi: string = GlobalVariables.apiURL + 'profile';

  constructor(private _http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this._http.get<Profile>(this.profileApi).pipe(retry(3));
  }

  setData(data: Profile): Observable<Profile> {
    return this._http.post<Profile>(this.profileApi, data);
  }
}
