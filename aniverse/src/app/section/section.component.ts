import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent implements OnInit {
  http = inject(HttpClient);
  animeData = signal<[] | any>([]);
  animeArray = input<{ url: string, id: string, title: string } | any>();
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const sub = this.http.get<{ data: [] }>(this.animeArray().url).subscribe({
      next: (result) => {
        console.log(result);
        this.animeData.set(result.data);
      },
    });
    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    });
  }

  clickRight(id: string) {
    const container: any = document.getElementById(`scroll_${id}`);
    container.scrollLeft += 250;
  }

  clickLeft(id: string) {
    const container: any = document.getElementById(`scroll_${id}`);
    container.scrollLeft -= 250;
  }
}
