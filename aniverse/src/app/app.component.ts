import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DiashowComponent } from './diashow/diashow.component';
import { CategoriesComponent } from './categories/categories.component';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    DiashowComponent,
    CategoriesComponent,
    SectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aniverse';
  animeArray: {}[] = [
    {
      url: 'https://api.jikan.moe/v4/top/anime?type=ona',
      id: '1',
      title: 'Top Animes',
    },
    {
      url: 'https://api.jikan.moe/v4/seasons/now?sfw',
      id: '2',
      title: 'Seasonal Anime',
    },
  ];
}
