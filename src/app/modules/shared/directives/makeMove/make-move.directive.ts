import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[makeMove]'
})
export class MakeMoveDirective implements AfterViewInit {
  @Input('makeMoveTarget') public target!: ElementRef
  @Input("extent") public extent: number = 1

  private targetCenter: {x: number, y:number} = {x: 0, y: 0}
  private angle: {x: number, y:number} = {x: 0, y: 0}

  constructor(private parent: ElementRef, private cdr: ChangeDetectorRef) { }

  @HostListener('wheel')
  private onWheel() {
    this.normalizeElementStyles()
  }

  @HostListener('mousemove', ['$event'])
  private makeMove(e: MouseEvent) {
    this.getMouseCoordinates(e)
    this.target.nativeElement.style.transform = 'perspective(60rem) rotateX(' + this.angle.x + 'deg) rotateY(' + this.angle.y + 'deg)'
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    this.normalizeElementStyles()
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

    this.targetCenter = {x: targetData.width/2 + targetData.x, y: targetData.height/2 + targetData.y}
  }

  private getCoordsFromCenter(mouse: {x: number, y: number}) {
    this.getTargetCenter()

    const x = -(this.targetCenter.y - mouse.y)
    const y = -(this.targetCenter.x - mouse.x)

    return {x, y}
  }

  private normalizeElementStyles() {
    this.target.nativeElement.style.transform = 'none'
  }
}
