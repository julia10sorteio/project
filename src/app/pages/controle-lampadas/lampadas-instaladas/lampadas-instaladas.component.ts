import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-lampadas-instaladas',
  templateUrl: './lampadas-instaladas.component.html',
  styleUrls: ['./lampadas-instaladas.component.scss']
})
export class LampadasInstaladasComponent implements OnInit {

  roomName = '';

  constructor(private route: ActivatedRoute, private db: AngularFirestore, private router: Router) { }

  lampList = []
  ngOnInit(): void {
    this.roomName = this.route.snapshot.paramMap.get('room');
    var uid = localStorage.getItem('uid');
    this.db.collection(`Users/${uid}/lampadas_ds`, ref => ref.where('room', '==', this.roomName)).get().subscribe(list => {
      if (list.empty) {
        this.router.navigate(['/not-found', this.roomName]);
        return;
      }
      console.error(list, list.size)
      var sssList = []
      list.forEach(r => {
        console.error(r)
        var lamp = r.data();
        lamp.id = r.id;
        console.log(lamp)

        sssList.push(lamp)
      })

      sssList = sssList.sort((a, b) => {
        return a.time - b.time
      })
      console.error(sssList)
      this.lampList = sssList;
    })

  }

}
