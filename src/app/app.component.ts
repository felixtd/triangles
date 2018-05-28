import { Component, OnInit } from '@angular/core';
import { ComputeService } from './compute.service';
import { Triangle } from './model/triangle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputX: number = 8;
  inputY: string;
  confirmInput: string;

  v1x: number;
  v1y: number;
  v2x: number;
  v2y: number;
  v3x: number;
  v3y: number;

  constructor(private computeService: ComputeService) {

  }

  computeTriangle(x: number, y: string) {
    const Y = y.toUpperCase();
    let triangle = this.computeService.computeTriangle(x, Y);
    this.v1x = triangle.V1.x;
    this.v1y = triangle.V1.y;
    this.v2x = triangle.V2.x;
    this.v2y = triangle.V2.y;
    this.v3x = triangle.V3.x;
    this.v3y = triangle.V3.y;

    let triangle2 = new Triangle(null, null, triangle.V1, triangle.V2, triangle.V3);
    const col = triangle2.vertexToColumn(triangle2.V2);
    const row = triangle2.vertexToRow(triangle.V2);
    this.confirmInput = 'Column(X) = ' + col + ' and row(Y) = ' + this.computeService.numberToChar(row);
  }

  ngOnInit(): void {
  }
}
