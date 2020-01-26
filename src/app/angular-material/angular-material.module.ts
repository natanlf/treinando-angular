import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[], //componentes usados no modulo
    imports: [MatSliderModule], //modulos importados para esse modulo
    exports:[MatSliderModule] //usamos em outros modulos esses componentes e modulos
})
export class AngularMaterialModule {}  