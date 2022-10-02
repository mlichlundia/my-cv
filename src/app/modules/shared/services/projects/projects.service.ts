import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Project } from 'src/interfaces/project';
import {BASE_URL} from "../../constants/url";

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsApi = BASE_URL  + 'projects';

  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get<Project[]>(this.projectsApi).pipe(retry(3));
  }

  setData(data: Project[]) {
    return this._http.post<Project[]>(this.projectsApi, data);
  }
}
