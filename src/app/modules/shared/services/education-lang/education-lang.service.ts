import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, retry } from 'rxjs';
import { BASE_URL } from "../../constants/url";

@Injectable({
  providedIn: 'root',
})
export class EducationLangService {
  private langApi: string = BASE_URL + 'languages';
  private educationApi: string = BASE_URL + 'educations';

  constructor(private http: HttpClient) { }

  public getLangs(): Observable<string[]> {
    return this.http.get<string[]>(this.langApi).pipe(delay(1000), retry(3));
  }

  public getEducation(): Observable<string[]> {
    return this.http.get<string[]>(this.educationApi).pipe(delay(1000), retry(3));
  }

  public setLangs(data: string[]): Observable<string[]> {
    return this.http.post<string[]>(this.langApi, data);
  }

  public setEducation(data: string[]): Observable<string[]> {
    return this.http.post<string[]>(this.educationApi, data);
  }
}
