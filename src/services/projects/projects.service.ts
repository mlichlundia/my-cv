import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { GlobalVariables } from 'src/constants';
import { Project } from 'src/interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsApi = GlobalVariables.apiURL + 'projects';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Project[]>(this.projectsApi).pipe(retry(3));
  }

  setData(data: Project[]) {
    return this.http.post<Project[]>(this.projectsApi, data);
  }
}
