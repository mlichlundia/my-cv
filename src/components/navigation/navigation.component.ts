import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  menuPoints = [
    { title: 'main', link: '#main' },
    { title: 'contacts', link: '#contacts' },
    { title: 'skills', link: '#skills' },
    { title: 'projects', link: '#projects' },
    { title: 'other', link: '#other' },
  ];

  /**
    if you open menu, assign skipClick to true,
    it prevents hide method from being called
   **/
  private skipClick = false;
  menuPointClick = false;
  @HostBinding('class')
  hostClass = 'unvisible';

  constructor() {}

  isActiveMenuPoint(bool: boolean) {
    this.menuPointClick = bool;
  }

  show(): void {
    this.hostClass = '';
    this.skipClick = true;
    console.log(this.skipClick);
  }

  @HostListener('click', ['$event'])
  hostClick(event: Event) {
    if (this.menuPointClick) {
      this.hide();
      this.isActiveMenuPoint(false);
    }
    event.stopPropagation();
  }

  @HostListener('window:click')
  hide(): void {
    if (this.skipClick) {
      this.skipClick = false;
      return;
    }
    this.hostClass = 'unvisible';
  }

  ngOnInit(): void {}
}
