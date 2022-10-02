import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, retry} from 'rxjs';
import { GlobalVariables } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class EducationLangService {
  private langApi: string = GlobalVariables.apiURL + 'languages';
  private educationApi: string = GlobalVariables.apiURL + 'educations';

  constructor(private http: HttpClient) {}

  public getLangs(): Observable<string[]> {
    return this.http.get<string[]>(this.langApi).pipe(retry(3));
  }

  public getEducation(): Observable<string[]> {
    return this.http.get<string[]>(this.educationApi).pipe(retry(3));
  }

  public setLangs(data: string[]):Observable<string[]> {
    return this.http.post<string[]>(this.langApi, data);
  }

  public setEducation(data: string[]): Observable<string[]> {
    return this.http.post<string[]>(this.educationApi, data);
  }
}