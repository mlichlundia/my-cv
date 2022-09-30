import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {Contact} from "../../modules/shared/interfaces/contacts.interface";
import {CONTACTS_MOCKS} from "../../modules/shared/mocks/contacts.mock";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger( 'openClose', [
      transition(':enter', [ style( {transform: 'translate(-23rem)', pointerEvents: 'none'}), animate('400ms 0.2ms ease-in-out', style( {transform: 'translate(0)', pointerEvents: 'all'})) ]),
      transition(':leave', [ animate('400ms 0.2ms ease-in-out', style( {transform: 'translate(-23rem)', pointerEvents: 'none'})) ]),
      ]
    )
  ]
})
export class SidebarComponent{
  @Output() public openMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

  public contacts: Contact[] = CONTACTS_MOCKS
  public isOpen: boolean = true

  @HostListener('window:click', ['$event'])
  private closeModal() {
    if(!this.isOpen) {
      return
    }

    if(window.innerWidth >= 1440) {
      return
    }

    if(
      (event?.target as HTMLElement).closest('.sidebar-container')
      && !(event?.target as HTMLElement).closest('ul li')
    ) {
      return
    }

    this.toggleOpen()
  }

  @HostListener('window:resize', ['event$'])
  private onResize(): void {
    this.isOpen = (event?.target as Window).innerWidth >= 1440;
  }

  public toggleOpen():void {
    this.isOpen = !this.isOpen
    this.openMenu.emit(this.isOpen)
  }
}
