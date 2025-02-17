import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { AnimeDataService } from '../anime-data.service';
import { map, tap, timeout } from 'rxjs';
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
    // this.anime.set(this.animeData.animeList())
    // console.log(this.anime());

    // const subscription = this.http.get<any>('https://api.jikan.moe/v4/anime').subscribe({
    //   next: (response) => {
    //   this.animeList.set(response.data)
    //   console.log(this.animeList());
    //   },
    //   error: (error) => {
    //     console.error('Fehler beim Abruf der API:', error);
    //   }
    // });

    // this.destoyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // })

    const subscription = this.http
      .get<{data: []}>('https://api.jikan.moe/v4/anime')
      .subscribe({
        next: (resData) => {
          this.animeData.set(resData.data)
          console.log(this.animeData());
          
        },
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
