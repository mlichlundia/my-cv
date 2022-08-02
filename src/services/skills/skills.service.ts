import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { GlobalVariables } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skillsApi: string = GlobalVariables.apiURL + 'skills';

  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http
      .get<Record<string, string>[]>(this.skillsApi)
      .pipe(retry(3));
  }

  setData(data: Record<string, string>[]) {
    return this.http.post<Record<string, string>[]>(this.skillsApi, data);
  }
}
