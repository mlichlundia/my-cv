import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { getMouseCoords, lerp, removeFromRender, setToRender } from "../../../../textura-renderer";
import { MouseService } from "../../services/mouse/mouse.service";
import { getDeviceType } from "../../functions/getDeviceType";
import { DeviceType } from "../../types/device.type";

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit, OnDestroy {
  @ViewChild('video') private video!: ElementRef

  public deviceType: DeviceType = 'desktop'

  constructor(private cdr: ChangeDetectorRef, public mouseService: MouseService) {}

  ngOnInit(): void {
    this.deviceType = getDeviceType()
    if (this.deviceType !== 'desktop') { return }

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
}
