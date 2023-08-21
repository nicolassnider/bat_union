import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();
  author: string = 'BAT - Buenos Aires Tae Kwon Do';
  authorName: string = 'Nicolás Snider';
  githubUrl: string = 'https://github.com/nicolassnider';

  constructor() { }

  ngOnInit(): void {
  }

}
