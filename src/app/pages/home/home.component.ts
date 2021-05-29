import {Component, OnInit} from '@angular/core';
import {BanxicoService} from "../../http/banxico.service";

@Component({
  selector: 't-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response:string =''
  constructor(private banxicoService:BanxicoService) { }

  async ngOnInit() {
    await this.init()
  }
  async init(){
    try {
    const r  = await this.banxicoService.getPetition()
      this.response=JSON.stringify(r,null,4)
    } catch (e){
      alert("Ups... ocurrion un error al hacer la peticion")
    }
  }

}
