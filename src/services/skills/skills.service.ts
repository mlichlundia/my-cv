import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { GlobalVariables } from 'src/constants';
import { Skill } from 'src/interfaces/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skillsApi: string = GlobalVariables.apiURL + 'skills';

  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get<Skill[]>(this.skillsApi).pipe(retry(3));
  }

  setData(data: Skill[]) {
    return this.http.post<Skill[]>(this.skillsApi, data);
  }
}
