import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  public rendererLabel: string = 'pointer'
  public pointer: Record<string, number> = {x: -100, y: -100}
  public isHovered: boolean = false
}
