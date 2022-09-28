import {Component} from '@angular/core';
import {Contact} from "../../modules/shared/interfaces/contacts.interface";
import {CONTACTS_MOCKS} from "../../modules/shared/mocks/contacts.mock";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger( 'openClose', [
      state('open', style( {transform: 'translate(0)'})),
      state('close', style( {transform: 'translate(-375px)'})),
      transition('open <=> close', [ animate('400ms 0.2ms ease-in-out') ])
      ]
    )
  ]
})
export class SidebarComponent{
  public contacts: Contact[] = CONTACTS_MOCKS
  public isOpen: boolean = true

  public toggleOpen():void {
    this.isOpen = !this.isOpen
  }

  public onResize(event: Event): void {
    this.isOpen = (event.target as Window).innerWidth >= 1440;
  }
}
