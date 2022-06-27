import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { AppareilService } from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']

})
export class AppareilComponent implements OnInit {

   @Input () appareilName: string;
   @Input () appareilStatus: string;
   @Input () indexOfAppareil: number;
   @Input () id: number;
    constructor(private appareilService: AppareilService) { }

    ngOnInit() {
    }

    getStatus(){
      return this.appareilStatus;
  }

   getColor() {
      if(this.appareilStatus === 'allumé'){
      return 'green';
      } else if (this.appareilStatus === 'éteint')
      return 'red';
    }

    onSwitchOn(){
    if(this.appareilStatus=='allumé'){
           this.appareilService.switchOffOne(this.indexOfAppareil)
    } else if(this.appareilStatus='éteint'){
           this.appareilService.switchOnOne(this.indexOfAppareil);
    }
    }

}
