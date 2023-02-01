import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import {
  getMouseCoordsFromElement,
  isElementHovered,
  isElementPartableVisible,
  lerp,
  setToRender
} from "../../../../textura-renderer";

@Directive({
  selector: '[stickToMouse]'
})
export class StickToMouseDirective implements OnInit {
  @Input('stickTarget') public target!: ElementRef
  @Input('stickRate') public rate: number = 0.5
  @Input('stickOnMouseMove') public onMouseMove?: () => void
  @Input('stickOnMouseLeave') public onMouseLeave?: () => void
  @Input('stickOnMouseLeave') public minWidth: number = 993

  private current: Record<'x' | 'y', number> = {x: 0, y: 0}
  private label = 'stick' + Date.now()

  constructor(private parent: ElementRef) { }

  ngOnInit(): void {
    setToRender({
      label: this.label,
      handler: () => {
        if(window.innerWidth < this.minWidth) { return }
        if(!this.parent) { return }
        if(!this.target) { return }
        if(!this.parent.nativeElement) { return }
        if(!this.target.nativeElement) { return }
        if(!isElementPartableVisible(this.parent.nativeElement)) { return }

        this.animate()
      },
      delay: 10
    })
  }

  private animate() {
    if(this.parent.nativeElement && isElementHovered(this.parent.nativeElement)) {
      this.move()
    } else {
      this.leave()
    }
  }

  private move() {
    if (typeof this.onMouseMove === 'function') {
      return this.onMouseMove()
    }

    const pointer = getMouseCoordsFromElement(this.parent.nativeElement).center.center

    if (!pointer.x && !pointer.y) {
      return
    }

    this.current.x = lerp(this.current.x, pointer.x, 0.05)
    this.current.y = lerp(this.current.y, pointer.y, 0.05)

    this.target.nativeElement.style.cssText = `transform: translate3d(${this.current.x / 2 / this.rate}px, ${this.current.y / 2 / this.rate}px, 0); transition: 0s`
  }

  private leave() {
    if (typeof this.onMouseLeave === 'function') {
      return this.onMouseLeave()
    }

    this.target.nativeElement.style.cssText = 'transition: transform .25s ease-in-out'

    this.current.x = 0
    this.current.y = 0
  }
}
