import {Component, Input} from '@angular/core';
import {Icons} from "../../../../../../../shared/components/UI/icon/constants";

@Component({
  selector: 'app-contact-manage-item',
  templateUrl: './contact-manage-item.component.html',
  styleUrls: ['./contact-manage-item.component.scss']
})
export class ContactManageItemComponent {
  @Input() icon: number = 0

  public icons = Icons
}
