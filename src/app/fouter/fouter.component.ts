import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fouter',
  templateUrl: './fouter.component.html',
  styleUrls: ['./fouter.component.css']
})
export class FouterComponent implements OnInit {
  autor:string = "Saydy Guzman";
  fecha:Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
