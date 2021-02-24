import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';



// tslint:disable-next-line:import-blacklist


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {


    this.subscription = this.regresaObservable()
        .subscribe(
          numero => console.log('Subs', numero ),
          error => console.log('error en el obs', error),
          () => console.log('el observador termino!')
        );

  }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  regresaObservable(){

    return new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( () =>{

        contador +=1;

        let salida = {
          valor: contador
        };

        observer.next(salida);

        // if(contador === 3 ){
        //   clearInterval( intervalo );
        //   observer.complete();
        // }
        // if( contador === 2) {
        //   observer.error('Auxilio!');
        // }

      }, 500);

    })
    .retry(2)
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter( (valor, index) =>{

      if (( valor % 2) === 1){
        //impar
        return true;
      }else {
        //par
        return false;
      }

    });


  }

}
