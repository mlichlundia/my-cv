import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {Contact} from "../../../interfaces/contacts.interface";
import {CONTACTS_MOCKS} from "../../../mocks/contacts.mock";
import {openCloseAnimation} from "../../../animations/open-close.animation";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [openCloseAnimation]
})
export class SidebarComponent {
  @Output() public openMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

  public contacts: Contact[] = CONTACTS_MOCKS
  public isOpen: boolean = true

  @HostListener('window:click', ['$event'])
  private closeModal() {
    if (!this.isOpen) {
      return
    }

    if (window.innerWidth >= 1440) {
      return
    }

    if (
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

  public toggleOpen(): void {
    this.isOpen = !this.isOpen
    this.openMenu.emit(this.isOpen)
  }
}
