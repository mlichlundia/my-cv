import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icons} from "../../../../../../../shared/components/UI/icon/constants";
import {Contact} from "../../../../../../../shared/interfaces/contacts.interface";

@Component({
    selector: 'app-contact-manage-item',
    templateUrl: './contact-manage-item.component.html',
    styleUrls: ['./contact-manage-item.component.scss']
})
export class ContactManageItemComponent implements OnInit {
    @Input() contact!: Contact

    @Output() removeContact: EventEmitter<Contact> = new EventEmitter<Contact>()

    public icons: { [key: string]: any } = Icons
    public currentIcon!: number

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.currentIcon = this.icons[this.contact.type.toUpperCase()]
        this.cdr.markForCheck()
    }

    public onRemove() {
        this.removeContact.emit(this.contact)
    }
}
