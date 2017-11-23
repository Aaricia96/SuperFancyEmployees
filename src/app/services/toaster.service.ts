import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay } from 'q';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/interval';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ErrorMessage } from '../ErrorMessage';

@Injectable()
export class ToasterService {

  messages : ErrorMessage[] = [];

  add(type : string, message: string) {

    console.log("add called");
    
    let errorMessage : ErrorMessage = new ErrorMessage();
    errorMessage.messageType = type;
    errorMessage.message = message;
    errorMessage.date = Date.now();

    this.messages.push(errorMessage);

    Observable.interval(1000).subscribe(x => {
      this.messages.forEach(element => {

        if (element.date+5000 < Date.now() ) {
          this.messages = this.messages.filter( obj => obj !== element);
        }

      });
    });
    
  }
  
  addError<T>(type : string, message: string, result? : T) {
    
    return (error: any): Observable<T> => {

      let errorMessage : ErrorMessage = new ErrorMessage();
      errorMessage.messageType = type;
      errorMessage.message = message;
      errorMessage.date = Date.now();

      this.messages.push(errorMessage);

      return of (result as T);
    };

  }

}
