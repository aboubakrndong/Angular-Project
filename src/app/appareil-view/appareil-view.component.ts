import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;


  appareils: any[];
  appareilSubscription: Subscription;

    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
        () => {
           resolve (date);
        }, 2000
        );
    });

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils) => {
         this.appareils = appareils;
      }
    );
   this.appareilService.emitAppareilSubject();
  }

   onAllumer(){
      console.log('on allume tout');
      this.appareilService.switchOnAll();
    }

    onEteindre(){
    if(confirm('etes vous sur de vouloir éteindre tous vos appareils ?')){
      this.appareilService.switchOffAll();
    } else
      return null;
    }
    ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
    }

}
