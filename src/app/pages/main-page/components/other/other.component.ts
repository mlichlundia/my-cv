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
    private otherService: OtherService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this.otherService.getEducation().subscribe((data) => {
      this.educationData = data;
      this.cdr.markForCheck();
    });

    this.otherService.getLangs().subscribe((data) => {
      this.langs = data;
      this.cdr.markForCheck();
    });
  }
}
