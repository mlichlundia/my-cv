import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13V11ZM17 12L17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929L17 12ZM13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289C11.9024 7.68342 11.9024 8.31658 12.2929 8.70711L13.7071 7.29289ZM12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071C12.6834 17.0976 13.3166 17.0976 13.7071 16.7071L12.2929 15.2929ZM7 13H17V11H7V13ZM12.2929 8.70711L16.2929 12.7071L17.7071 11.2929L13.7071 7.29289L12.2929 8.70711ZM16.2929 11.2929L12.2929 15.2929L13.7071 16.7071L17.7071 12.7071L16.2929 11.2929Z"
        [attr.fill]="color"/>
    </svg>
  `,
})
export class ArrowIconComponent {
  @Input() public color: string = '#FCFCFF'
  @Input() public size: number = 24
}
