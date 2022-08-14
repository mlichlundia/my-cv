import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  /**
    if you open menu, assign _skipClick to true,
    it prevents hide method from being called
   **/
  private _skipClick = false;
  menuPointClick = false;
  @HostBinding('class')
  hostClass = 'unvisible';

  isActiveMenuPoint(bool: boolean) {
    this.menuPointClick = bool;
  }

  show(): void {
    this.hostClass = '';
    this._skipClick = true;
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
    if (this._skipClick) {
      this._skipClick = false;
      return;
    }

    this.hostClass = 'unvisible';
  }
}
