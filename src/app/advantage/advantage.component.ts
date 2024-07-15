import { Component } from '@angular/core';
import { AdvantageLiComponent } from '../advantage-li/advantage-li.component';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [AdvantageLiComponent],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.sass',
})
export class AdvantageComponent {}
