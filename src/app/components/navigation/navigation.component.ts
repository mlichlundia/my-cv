import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  /**
    if you open menu, assign skipClick to true,
    it prevents hide method from being called
   **/
  private skipClick = false;
  menuPointClick = false;
  @HostBinding('class')
  hostClass = 'unvisible';

  isActiveMenuPoint(bool: boolean) {
    this.menuPointClick = bool;
  }

  show(): void {
    this.hostClass = '';
    this.skipClick = true;
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
}
