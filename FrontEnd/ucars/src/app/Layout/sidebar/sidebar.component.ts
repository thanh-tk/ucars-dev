import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false;

  currentSelect = 0;
  @Output() sendDataToParent = new EventEmitter();
  
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  _sendDataToParent(data:string) {
    this.sendDataToParent.emit(data);
    this.toggleCollapsed()
  }

  navigating(idx: number){
    this.currentSelect = idx;
  }
}


