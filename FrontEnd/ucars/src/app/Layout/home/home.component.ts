import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  isCollapsed = false;
  dataFromChild = '';
  eventFromChild(data: string) {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
