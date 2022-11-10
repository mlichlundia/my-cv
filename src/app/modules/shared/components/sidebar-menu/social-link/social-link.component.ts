import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../../interfaces/contacts.interface";
import {Icons} from "../../UI/icon/constants";

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent implements OnInit {
  @Input() public contact!: Contact

  public icons: { [key:string]: any } = Icons
  public currentIcon!: number

  ngOnInit(): void {
    this.currentIcon = this.icons[this.contact.type.toUpperCase()] || this.icons['DEFAULT_SOCIAL']
  }
}
