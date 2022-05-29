import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  dataSource = [{}];
  displayedColumns = ['skills', 'knowledge'];

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    // this.dataSource = ['lala', 'nana'];
    this.dataSource = [
      {skills: 'sA', knowledge: 'kA'},
      {skills: 'sB', knowledge: 'kB'},
      {skills: 'sC', knowledge: 'kC'},
      {skills: 'sD', knowledge: 'kD'},
    ];
  }

}
