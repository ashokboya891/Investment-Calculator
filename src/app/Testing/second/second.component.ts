import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  receivedId:string|null=null;
  constructor(private router:ActivatedRoute)
  {
    
  }
  ngOnInit() {
    this.receivedId=this.router.snapshot.paramMap.get('id');
  }
}
