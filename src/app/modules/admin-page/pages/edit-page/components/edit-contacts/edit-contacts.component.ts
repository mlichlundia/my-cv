import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../../../../shared/services/profile/profile.service";
import {Icons} from "../../../../../shared/components/UI/icon/constants";
import {Contact} from "../../../../../../../interfaces/profile";

@Component({
    selector: 'app-edit-contacts',
    templateUrl: './edit-contacts.component.html',
    styleUrls: ['./edit-contacts.component.scss']
})
export class EditContactsComponent implements OnInit {
    public form!: FormGroup
    public contacts: Contact[] = []
    public icons = Icons
    public isEdit: boolean = false
    public updateSocial: string = ''

    constructor(
        private cdr: ChangeDetectorRef,
        private fb: FormBuilder,
        public profileService: ProfileService
    ) {}

    ngOnInit(): void {
        this.initForm()
        this.contacts = this.profileService.profile?.contacts || []
    }

    public get title(): AbstractControl<string> {
        return this.form.get('type')!
    }

    public get link(): AbstractControl<string> {
        return this.form.get('value')!
    }

    public get titleError(): string {
        if (!this.title?.errors) {
            return ''
        }

        if (this.title?.errors['required']) {
            return 'Username is required'
        }

        if (this.title?.errors['minlength']) {
            return `Username should contain not less than ${this.title.errors['minlength']['requiredLength']} symbols`
        }

        if (this.title?.errors['maxlength']) {
            return `Username should contain not more than ${this.title.errors['maxlength']['requiredLength']} symbols`
        }

        return 'Title is invalid'
    }

    public get linkError(): string {
        if (!this.link?.errors) {
            return ''
        }

        if (this.link?.errors['required']) {
            return 'Username is required'
        }

        if (this.link?.errors['minlength']) {
            return `Username should contain not less than ${this.link.errors['minlength']['requiredLength']} symbols`
        }

        return 'Social link is invalid'
    }

    public onSubmit():void {
        if (this.form.invalid || this.form.pristine) {
            return
        }

        this.contacts.push(this.form.value)

        this.profileService.setProfile({...this.profileService.profile, contacts: this.contacts}).subscribe(() => {
            this.form.reset()
            this.title.setErrors(null)
            this.link.setErrors(null)
        })
    }

    public onUpdate() {
        this.contacts = this.contacts.filter(contact => contact.type !== this.updateSocial)
        this.contacts.push(this.form.value)

        this.profileService.setProfile({...this.profileService.profile, contacts: this.contacts}).subscribe(() => {
            this.isEdit = false

            this.form.reset()

            this.title.setErrors(null)
            this.link.setErrors(null)
        })
    }

    public onEdit(editContact: Contact):void {
        this.isEdit = true
        this.updateSocial = editContact.type

        this.title.setValue(editContact.type)
        this.link.setValue(editContact.value)
    }

    public onRemove(removeContact: Contact):void {
        this.contacts = this.contacts.filter(contact => contact !== removeContact) || []

        this.profileService.setProfile({...this.profileService.profile, contacts: this.contacts}).subscribe(() => {
            this.title.setErrors(null)
            this.link.setErrors(null)
        })
    }

    private initForm(): void {
        this.form = this.fb.group({
            type: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
            value: new FormControl('', [Validators.required, Validators.minLength(3),]),
        })
    }
}
