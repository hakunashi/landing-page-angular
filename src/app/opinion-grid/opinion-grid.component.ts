import { Component } from '@angular/core';
import { OpinionComponent } from '../opinion/opinion.component';

@Component({
  selector: 'app-opinion-grid',
  standalone: true,
  imports: [OpinionComponent],
  templateUrl: './opinion-grid.component.html',
  styleUrl: './opinion-grid.component.sass',
})
export class OpinionGridComponent {}
