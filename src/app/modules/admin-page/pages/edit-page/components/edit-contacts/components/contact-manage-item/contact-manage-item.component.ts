import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icons} from "../../../../../../../shared/components/UI/icon/constants";
import {Contact} from "../../../../../../../shared/interfaces/contacts.interface";
import {ProfileService} from "../../../../../../../shared/services/profile/profile.service";

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

    constructor(private cdr: ChangeDetectorRef, private profileService: ProfileService) {
    }

    ngOnInit(): void {
        this.currentIcon = this.icons[this.contact.type.toUpperCase()]
        this.cdr.markForCheck()
    }

    public onRemove() {
        console.log(123)
        const profile = this.profileService.profile
        const contacts = profile.contacts?.filter(contact => contact !== this.contact)

        this.profileService.setProfile({...profile, contacts}).subscribe(() => {
                this.profileService.profile = {...profile, contacts}
            }
        )
    }
}
