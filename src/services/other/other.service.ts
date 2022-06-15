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

  constructor(private http: HttpClient) {}

  getLangs() {
    return this.http.get<string[]>(this.langApi).pipe(retry(3));
  }

  getEducation() {
    return this.http.get<string[]>(this.educationApi).pipe(retry(3));
  }

  setLangs(data: string[]) {
    return this.http.post<string[]>(this.langApi, data);
  }

  setEducation(data: string[]) {
    return this.http.post<string[]>(this.educationApi, data);
  }
}
