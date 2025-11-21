import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristicaComponent } from "../components/HeaderHeuristicaComponent/HeaderHeuristicaComponent";

@Component({
  selector: 'app-h4-page',
  imports: [HeaderHeuristicaComponent],
  templateUrl: './h4-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H4Page { }
