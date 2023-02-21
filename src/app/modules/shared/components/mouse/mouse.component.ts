import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { getMouseCoords, lerp, removeFromRender, setToRender } from "../../../../textura-renderer";
import { MouseService } from "../../services/mouse/mouse.service";

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video') private video!: ElementRef

  public isVideoReady: boolean = false

  constructor(private cdr: ChangeDetectorRef, public mouseService: MouseService) {}

  ngOnInit(): void {
    setToRender({
      label: this.mouseService.rendererLabel, handler: () => {
        const {x, y} = getMouseCoords().window

        if (!x || !y) { return }

        this.mouseService.pointer['x'] = lerp(this.mouseService.pointer['x'], x, .2)
        this.mouseService.pointer['y'] = lerp(this.mouseService.pointer['y'], y, .2)

        this.cdr.markForCheck()
      }, delay: 10
    })
  }

  ngOnDestroy(): void {
    removeFromRender(this.mouseService.rendererLabel)
  }

  ngAfterViewInit(): void {
    this.video && (this.video.nativeElement.muted = true)
  }
}
