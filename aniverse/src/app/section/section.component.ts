import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent implements OnInit{
  http = inject(HttpClient);
  animeData = signal<[] | any>([]);

  ngOnInit(): void {
    this.http.get<{data: []}>('https://api.jikan.moe/v4/top/anime?type=ona').subscribe({
      next: (result) => {
        this.animeData.set(result.data);
      }
    })
  }


}
