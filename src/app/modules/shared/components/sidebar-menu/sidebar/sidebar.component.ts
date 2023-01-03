import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Contact} from "../../../interfaces/contacts.interface";
import {CONTACTS_MOCKS} from "../../../mocks/contacts.mock";
import {openCloseAnimation} from "../../../animations/open-close.animation";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [openCloseAnimation]
})
export class SidebarComponent implements OnInit {
  @Output() public openMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

  public contacts: Contact[] = CONTACTS_MOCKS
  public isOpen: boolean = false

  @HostListener('window:click', ['$event.target'])
  private closeModal(element: HTMLElement) {
    if (!this.isOpen) {
      return
    }

    if (window.innerWidth >= 1440) {
      this.isOpen = true
      return
    }

    if (
        !element.classList.contains('menu-button')
        && !element.classList.contains('sidebar-container')
        && !element.closest('.menu__point')
        && !element.closest('.menu__logo')
    ) {
      return
    }

    this.toggleOpen()
  }

  @HostListener('window:resize', ['event$'])
  private onResize(): void {
    this.isOpen = window.innerWidth >= 1440;
  }

  ngOnInit() {
    this.isOpen = window.innerWidth >= 1440;
  }

  public toggleOpen(): void {
    this.isOpen = !this.isOpen
    this.openMenu.emit(this.isOpen)
  }
}
