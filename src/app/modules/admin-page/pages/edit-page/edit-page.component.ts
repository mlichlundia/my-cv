import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public tabs: string[] = ['contacts', 'skills', 'projects', 'other']
  public currentView: number = 0

  ngOnInit() {
    this.currentView = 0
  }

  public changeCurrentView(view: number): void {
    this.currentView = view
  }
}
