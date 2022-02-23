import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  @Input() value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
