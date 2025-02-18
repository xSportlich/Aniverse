import { CommonModule, SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  DestroyRef,
  inject,
  Input,
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
  animeArray = input<string>('');
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
     console.log(this.animeArray());
     
      const sub = this.http.get<{ data: [] }>(this.animeArray()).subscribe({
        next: (result) => {
          console.log(result);
          this.animeData.set(result.data);
        },
      });
      this.destroyRef.onDestroy(() => {
        sub.unsubscribe()
      })
  }

  clickRight() {
    const container: any = document.getElementById('scroll');
    container.scrollLeft += 250;
  }

  clickLeft() {
    const container: any = document.getElementById('scroll');
    container.scrollLeft -= 250;
  }
}
