// import { IonicModule } from '@ionic/angular';
// import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CreatePage } from './create.page';

// @NgModule({
//   imports: [
//     IonicModule,
//     CommonModule,
//     FormsModule,
//     RouterModule.forChild([{ path: '', component: CreatePage }])
//   ],
//   declarations: [CreatePage]
// })
// export class CreatePageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePage } from './create.page';
import {FormControl,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: CreatePage }])
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {}