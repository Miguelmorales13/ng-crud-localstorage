import {Injectable} from '@angular/core';
import {IMueble} from "../models/imueble";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  muebles :IMueble[]=[]
  constructor() { }

  get(){
    this.muebles = JSON.parse(localStorage.getItem('muebles') ??'[]')
  }
  getOne(id:number){
    return this.muebles.find(mueble=>mueble.id==id)??{precio:0.0,id:0,nombre:''}
  }
  add(item:IMueble){
    this.muebles= [...this.muebles,{...item,id:Date.now()}]
    this.setStorage()
  }
  update(id:number,item:IMueble){
    this.muebles= [...this.muebles.filter(mueble=>mueble.id !-id),{...item}]
    this.setStorage()
  }
  delete(id:number){
    this.muebles= [...this.muebles.filter(mueble=>mueble.id !-id)]
    this.setStorage()
  }
  setStorage(){
    localStorage.setItem('muebles',JSON.stringify(this.muebles))
  }
}
