import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { GlobalVariables } from 'src/constants';
import { Profile } from 'src/interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileApi: string = GlobalVariables.apiURL + 'profile';

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<Profile>(this.profileApi).pipe(retry(3));
  }

  setData(data: Profile) {
    return this.http.post<Profile>(this.profileApi, data);
  }
}
