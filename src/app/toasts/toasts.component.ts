import { Component, OnInit, Input } from '@angular/core';
import { ToasterService } from '../services/toaster.service';
import { trigger, state, style, animate, transition, query, animateChild } from '@angular/animations';
import { ErrorMessage } from '../ErrorMessage';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css'],
  animations: [
    trigger('flyInOutParent', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('flyInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(300, style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ToastsComponent implements OnInit {

  constructor(private toasterService: ToasterService) { 
    this.messages = toasterService.messages;
  }
  
  @Input() messages: ErrorMessage[];

  ngOnInit() {

  }

}
