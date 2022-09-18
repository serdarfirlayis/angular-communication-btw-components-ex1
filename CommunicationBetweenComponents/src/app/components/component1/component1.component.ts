import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../../services/communication-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private service: CommunicationServiceService) { }

  ngOnInit(): void { }

  increaseOrDecreaseClicked(event: string) {
    this.service.sendIncreaseOrDecreaseEvent(event);
  }

}
