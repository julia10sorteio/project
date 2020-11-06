import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lampadas-not-found',
  templateUrl: './lampadas-not-found.component.html',
  styleUrls: ['./lampadas-not-found.component.scss']
})
export class LampadasNotFoundComponent implements OnInit {
  roomName = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomName = this.route.snapshot.paramMap.get('room');
  }

}
