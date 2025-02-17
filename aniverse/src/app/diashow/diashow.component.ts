import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { AnimeDataService } from '../anime-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diashow',
  standalone: true,
  imports: [],
  templateUrl: './diashow.component.html',
  styleUrl: './diashow.component.scss',
})
export class DiashowComponent implements OnInit {
  private animeService = inject(AnimeDataService);
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  animeData = signal<[] | any >([]);

  ngOnInit() {
    const subscription = this.http
      .get<{data: []}>('https://api.jikan.moe/v4/anime')
      .subscribe({
        next: (resData) => {
          this.animeData.set(resData.data)
        },
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
