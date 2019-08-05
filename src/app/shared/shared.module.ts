import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    // pipes
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentsModule

  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    ComponentsModule
    // pipes
  ]
})
export class SharedModule { }
