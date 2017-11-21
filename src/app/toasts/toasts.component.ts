import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    this.toggleToaster("toast-danger", "Dit is gevaarlijk!");
  }

  toggleToaster(messageType : string, message: string) : void {
    let x = document.getElementById(messageType);
    if (x.style.display === "none") {
        x.style.display = "block";
        x.textContent = message;
    } else {
        x.style.display = "none";
    }
  }

}
