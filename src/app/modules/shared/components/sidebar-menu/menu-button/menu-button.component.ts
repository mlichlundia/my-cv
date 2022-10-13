import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent {
  @Input() public isOpen!: boolean
  @Output() public onToggle: EventEmitter<boolean> = new EventEmitter<boolean>()

  public toggleOpen(): void {
    this.onToggle.emit(!this.isOpen)
  }
}
