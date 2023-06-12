import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public image:string="https://th.bing.com/th/id/OIP.IJqNntTGsGtQ51zB4svW5QHaEK?w=314&h=180&c=7&r=0&o=5&pid=1.7";
  public Titulo:string= "Curso de Angular"

  constructor(){ }

  ngOnInit(): void {
    
  }
}
