import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[makeMove]'
})
export class MakeMoveDirective implements AfterViewInit {
  @Input('makeMoveTarget') public target!: ElementRef
  @Input("extent") public extent!: number

  private targetCenter: {x: number, y:number} = {x: 0, y: 0}
  private power: {x: number, y:number} = {x: 0, y: 0}

  constructor(private parent: ElementRef, private cdr: ChangeDetectorRef) { }

  @HostListener('wheel')
  private onWheel() {
    this.normalizeElementStyles()
  }

  @HostListener('mousemove', ['$event'])
  private makeMove(e: MouseEvent) {
    this.getMouseCoordinates(e)
    this.target.nativeElement.style.transform = 'matrix3d(1,0,0.00,' + this.power.x + ',0.00,1,0.00,' + this.power.y + ',0,0,1,0,0,0,0,1)'
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
    this.power.x = fromCenter.x / 100000 / this.extent
    this.power.y = fromCenter.y / 100000 / this.extent
  }

  private getTargetCenter() {
    const targetData = this.parent.nativeElement.getBoundingClientRect()

    this.targetCenter = {x: targetData.width/2 + targetData.x, y: targetData.height/2 + targetData.y}
  }

  private getCoordsFromCenter(mouse: {x: number, y: number}) {
    this.getTargetCenter()

    const x = this.targetCenter.x - mouse.x
    const y = this.targetCenter.y - mouse.y

    return {x, y}
  }

  private normalizeElementStyles() {
    this.target.nativeElement.style.transform = 'none'
  }
}
