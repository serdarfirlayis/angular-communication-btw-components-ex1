import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../../services/communication-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  counterValue = 0;

  constructor(private service: CommunicationServiceService) {
    service.getIncreaseOrDecreaseEvent().subscribe((data) => {
      if (data === "increase") {
        this.counterValue++;
      } else if (data === "decrease") {
        this.counterValue--;
      }
    });
  }

  ngOnInit(): void { }

}
