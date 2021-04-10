import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 counter : number = 0;
 @Output() intervalFired = new EventEmitter<number>();
  interval;
  constructor() { }

  ngOnInit(): void {
  }

  startCounter(){
    this.interval = setInterval(number =>{
        this.intervalFired.emit(this.counter + 1)
        this.counter ++;
      }
    ,1000)
  }

  stopCounter() {
    clearInterval(this.interval);
  }

  clearEverything(){
    this.counter = 0;
    document.querySelector('p').remove();
  }
}
