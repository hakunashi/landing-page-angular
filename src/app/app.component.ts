import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { VideoComponent } from './video/video.component';
import { SliderComponent } from './slider/slider.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { OpinionGridComponent } from './opinion-grid/opinion-grid.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CallToActionComponent,
    VideoComponent,
    SliderComponent,
    AdvantageComponent,
    OpinionGridComponent,
    FooterComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {}
