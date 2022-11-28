import { StarshipsService } from '../starships.service';
import { Component, OnInit } from '@angular/core';
import { Starships } from '../starships.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {


  showModal: any;

  get mostrar (){
    return this.starshipsService.mostrar;
    
  }

  get mostrar2 (){
    return this.starshipsService.mostrar2;
  }

  get mostrar3 (){
    return this.starshipsService.mostrar3;
  }


  verNaves(index: number, arrayNaves: number) {
    console.log('index de la nave llamada: ', index);
    this.starshipsService.fichaNaves(index, arrayNaves);
  }

  masNaves() {
    this.starshipsService.verlistaNaves();

  }

  
  constructor (private starshipsService: StarshipsService){}

  load: boolean = false;

  ngOnInit(): void {
    
  }

}


