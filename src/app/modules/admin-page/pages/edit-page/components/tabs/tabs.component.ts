import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs!: string[]
  @Input() activeTab!: number
  @Output() public changeView: EventEmitter<number> = new EventEmitter<number>()

  public onChange(view: number):void {
    this.changeView.emit(view)
  }
}
