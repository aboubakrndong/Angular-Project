import {Subject} from "rxjs";

export class AppareilService{

  appareilsSubject = new Subject<any[]>();

  private appareils = [
  {
    id:1,
    name:'Machine a laver',
    status:'éteint'
  },
  {
    id:2,
    name: 'Frigo',
    status:'allumé'
  },
  {
    id:3,
    name: 'Ordinateur',
    status: 'éteint'
  }
  ];

 emitAppareilSubject(){
   this.appareilsSubject.next(this.appareils.slice());
 }

  switchOnAll() {
     for(let appareil of this.appareils) {
        appareil.status = 'allumé';
     }
     this.emitAppareilSubject();
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
      this.emitAppareilSubject();
    }
  }

  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();

  }
  switchOffOne(index: number){
  this.appareils[index].status = 'éteint';
  this.emitAppareilSubject();

  }
  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  addAppareil(name: string, status: string) {
   const appareilObject = {
     id: 0,
     name: '',
     status: ''
   };
   appareilObject.name = name;
   appareilObject.status = status;
   appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
   this.appareils.push(appareilObject);
   this.emitAppareilSubject();
 }
}
