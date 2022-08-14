import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { OtherService } from 'src/services/other/other.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherComponent implements OnInit {
  educationData!: string[];
  langs!: string[];

  constructor(
    private _otherService: OtherService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this._otherService.getEducation().subscribe((data) => {
      this.educationData = data;
      this._cdr.markForCheck();
    });

    this._otherService.getLangs().subscribe((data) => {
      this.langs = data;
      this._cdr.markForCheck();
    });
  }
}
