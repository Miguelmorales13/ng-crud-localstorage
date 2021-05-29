import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {IMueble} from "../../models/imueble";
import {NgForm} from "@angular/forms";

@Component({
  selector: 't-muebles',
  templateUrl: './muebles.component.html',
  styleUrls: ['./muebles.component.css']
})
export class MueblesComponent implements OnInit {

  muebleSeleccionado:IMueble = {
    id:0,
    precio:0.0,
    nombre:'',
  }
  constructor( public  storageService:StorageService) { }

  ngOnInit(): void {
    this.storageService.get()
  }
  onSubmit( form:NgForm){
    const {id} =this.muebleSeleccionado
    if (!form.valid) return
    if (id){
      this.storageService.update(id, {...form.value,id}  )
    } else {
      this.storageService.add( {...form.value}  )
    }
    this.setMueble(0)
  }
  delete(id:number){
    this.storageService.delete(id)
    this.setMueble(0)
  }
  setMueble(id:number){
    if (!id){
      this.muebleSeleccionado= {
        id:0,
        precio:0.0,
        nombre:'',
      }
    }
    this.muebleSeleccionado= this.storageService.getOne(id);
  }
  handleDelete(id:number){
    if (confirm("Estas seguro que deseas eliminarlo ? ")){
      this.storageService.delete(id)

    }
  }

}
