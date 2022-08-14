import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { GlobalVariables } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class OtherService {
  langApi: string = GlobalVariables.apiURL + 'languages';
  educationApi: string = GlobalVariables.apiURL + 'educations';

  constructor(private _http: HttpClient) {}

  getLangs() {
    return this._http.get<string[]>(this.langApi).pipe(retry(3));
  }

  getEducation() {
    return this._http.get<string[]>(this.educationApi).pipe(retry(3));
  }

  setLangs(data: string[]) {
    return this._http.post<string[]>(this.langApi, data);
  }

  setEducation(data: string[]) {
    return this._http.post<string[]>(this.educationApi, data);
  }
}
