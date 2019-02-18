import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  showMenu = false;

  constructor( private mainService: MainService) {
    this.mainService.openMenu.subscribe((data) => {
      this.showMenu = true;
    });
  }


  ngOnInit() {
  }

}
