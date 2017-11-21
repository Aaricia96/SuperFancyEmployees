import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay } from 'q';
import { of } from 'rxjs/observable/of'

@Injectable()
export class ToasterService {
  
  add<T>(messageType : string, message: string, result? : T) {
    this.toggleToaster(messageType, message);
    delay(5000).then(()=> {
      this.toggleToaster(messageType);
    });
    return (error: any): Observable<T> => {
      return of (result as T);
    };
  }

  toggleToaster(messageType : string, message?: string) : void {
    let x = document.getElementById(messageType);
    if (x.style.display === "none") {
        x.style.display = "block";
        x.textContent = message;
    } else {
        x.style.display = "none";
    }
 
  }

}
