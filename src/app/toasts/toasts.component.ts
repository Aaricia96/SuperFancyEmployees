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
    // this.toasterService.add("toast-danger", "Dit is gevaarlijk!");
  }

}
