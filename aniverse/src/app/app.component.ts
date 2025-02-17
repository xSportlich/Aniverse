import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { DiashowComponent } from "./diashow/diashow.component";
import { CategoriesComponent } from './categories/categories.component';
import { SectionComponent } from "./section/section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DiashowComponent, CategoriesComponent, SectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aniverse';
}
