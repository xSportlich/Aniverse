import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable, OnInit, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeDataService  {
  private http = inject(HttpClient);
  private destoyRef = inject(DestroyRef)
  animeList = signal<[]>([]);
  

  fetchData() {
   
  }
}
