import { Point } from "./point.model";

export class Triangle {
    private isLowerTriangle: boolean;

    constructor(public x: number, public y: number,
                public V1: Point, public V2: Point, public V3: Point) {
        if (this.V1 == undefined) {
            this.isLowerTriangle = this.x % 2 !== 0;
        }
        else {
            this.isLowerTriangle = V2.y > V1.y;
        }
    }

    computeCoordinates() {
        if (this.isLowerTriangle) {
            let tempX = this.x - 1;
            let offset = (tempX / 2);
            this.V1 = new Point((tempX - offset) * 10, (this.y - 1) * 10);
            this.V2 = new Point(this.V1.x, this.V1.y + 10);
            this.V3 = new Point(this.V2.x + 10, this.V2.y);
        }
        else {
            let tempX = this.x - 2;
            let offset = (tempX / 2);
            this.V1 = new Point((tempX - offset) * 10, (this.y - 1) * 10);
            this.V2 = new Point(this.V1.x + 10, this.V1.y);
            this.V3 = new Point(this.V2.x, this.V2.y + 10);
        }
    }
    
    vertexToColumn(vertex: Point): number {
        if (this.isLowerTriangle)
        {
            return 2 * (vertex.x / 10) + 1;
        }
        else
        {
            return 2 * (vertex.x / 10);
        }
    }

    vertexToRow(vertex: Point): number {
        if (this.isLowerTriangle)
        {
            return vertex.y / 10;
        }
        else
        {
            return vertex.y / 10 + 1;
        }
    }

}