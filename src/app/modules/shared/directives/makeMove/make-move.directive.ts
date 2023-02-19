import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { getDeviceType } from "../../functions/getDeviceType";

@Directive({
  selector: '[makeMove]'
})
export class MakeMoveDirective implements AfterViewInit {
  @Input('makeMoveTarget') public target!: ElementRef
  @Input("extent") public extent: number = 1

  private targetCenter: { x: number, y: number } = {x: 0, y: 0}
  private angle: { x: number, y: number } = {x: 0, y: 0}

  constructor(private parent: ElementRef, private cdr: ChangeDetectorRef) { }

  @HostListener('mousemove', ['$event'])
  private makeMove(e: MouseEvent) {
    if (getDeviceType() !== 'desktop') {
      return
    }

    this.getMouseCoordinates(e)
    this.target.nativeElement.style.transform = 'rotateX(' + this.angle.x + 'deg) rotateY(' + this.angle.y + 'deg)'
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (getDeviceType() !== 'desktop') {
      return
    }

    this.addTransition()
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    if (getDeviceType() !== 'desktop') {
      return
    }

    this.normalizeElementStyles()
    this.addTransition()
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges()

    this.getTargetCenter()
  }

  private getMouseCoordinates(e: MouseEvent) {
    const fromCenter = this.getCoordsFromCenter({x: e.clientX, y: e.clientY})
    this.angle.x = fromCenter.x / 10 / this.extent
    this.angle.y = fromCenter.y / 10 / this.extent
  }

  private getTargetCenter() {
    const targetData = this.parent.nativeElement.getBoundingClientRect()

    this.targetCenter = {x: targetData.width / 2 + targetData.x, y: targetData.height / 2 + targetData.y}
  }

  private getCoordsFromCenter(mouse: { x: number, y: number }) {
    this.getTargetCenter()

    const x = -(this.targetCenter.y - mouse.y)
    const y = -(this.targetCenter.x - mouse.x)

    return {x, y}
  }

  private normalizeElementStyles() {
    this.target.nativeElement.style.transform = 'none'
  }

  private addTransition() {
    this.target && (this.target.nativeElement.style.transition = 'all .5s cubic-bezier(0.03,0.98, 0.52, 0.99) 0s')
    setTimeout(() => {
      this.target.nativeElement.style.transition = null
    }, 500)
  }
}
