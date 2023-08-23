import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-negrito',
  templateUrl: './texto-negrito.component.html',
  styleUrls: ['./texto-negrito.component.css']
})
export class TextoEmNegritoComponent {
  @Input() Negrito = ""  ;

}