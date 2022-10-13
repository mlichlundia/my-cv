import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, retry} from 'rxjs';
import {SkillInterface} from "../../interfaces/skill.interface";
import {BASE_URL} from "../../constants/url";

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsApi: string = BASE_URL + 'skills';

  constructor(private http: HttpClient) {
  }

  public getSkills(): Observable<SkillInterface[]> {
    return this.http
      .get<SkillInterface[]>(this.skillsApi)
      .pipe(retry(3));
  }

  public setData(data: Record<string, string>[]): Observable<SkillInterface[]> {
    return this.http.post<SkillInterface[]>(this.skillsApi, data);
  }
}
