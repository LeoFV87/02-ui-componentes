import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-header-heuristica-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './HeaderHeuristicaComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderHeuristicaComponent {

 numeroHeuristica = input.required<string>();
  titulo = input.required<string>();
  concepto = input.required<string>();

  getIcon(): string {
    const iconMap: { [key: string]: string } = {
      '1': '👁️', '2': '🌍', '3': '🎮', '4': '📏', '5': '🚫',
      '6': '💭', '7': '⚡', '8': '🎨', '9': '🆘', '10': '📚'
    };
    return iconMap[this.numeroHeuristica()] || '🔍';
  }


 }
