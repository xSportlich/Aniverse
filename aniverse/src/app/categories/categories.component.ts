import { AfterRenderRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  ngOnInit() {
    const container = document.getElementById('main');
    container?.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) {
        container.scrollLeft += 100;
        e.preventDefault();
      } else {
        container.scrollLeft -= 100;
        e.preventDefault();
      }
    });
  }
}
