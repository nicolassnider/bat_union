import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() title: string='';
  @Input() content: string='';
  @Input() date: string='';
  @Input() image: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
