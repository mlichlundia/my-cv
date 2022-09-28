import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../modules/shared/interfaces/contacts.interface";

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent implements OnInit {
  @Input() public contact!: Contact

  public imgSrc!:string

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = `/assets/svg/social/${this.contact.type}.svg`
  }

}
