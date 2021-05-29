import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MueblesComponent} from "./pages/muebles/muebles.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'muebles', component: MueblesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // enableTracing:true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
