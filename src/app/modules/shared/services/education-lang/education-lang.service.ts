import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { BASE_URL } from "../../constants/url";

@Injectable({
  providedIn: 'root',
})
export class EducationLangService {
  private langApi: string = BASE_URL + 'languages';
  private educationApi: string = BASE_URL + 'educations';

  public education: string = ''
  public langs: string[] = []

  constructor(private http: HttpClient) { }

  public getLangs(): Observable<string[]> {
    return this.http.get<string[]>(this.langApi)
        .pipe(
            retry(3),
            map(res => this.langs = res)
        );
  }

  public getEducation(): Observable<string> {
    return this.http.get<string[]>(this.educationApi)
        .pipe(
            retry(3),
            map(res => this.education = res[0])
        );
  }

  public setLangs(data: string[]): Observable<string[]> {
    return this.http.post<string[]>(this.langApi, data);
  }

  public setEducation(data: string[]): Observable<string[]> {
    return this.http.post<string[]>(this.educationApi, data);
  }
}
