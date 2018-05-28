import { Triangle } from "./model/triangle.model";

export class ComputeService {

    computeTriangle(x: number, y: string): Triangle {
        let ny = this.charToRowNumber(y);
        let triangle = new Triangle(x, ny, null, null, null);

        triangle.computeCoordinates();
        return triangle;
    }

    numberToChar(num: number): string {
        const asciiNum = num + 64;
        return String.fromCharCode(asciiNum);
    }

    private charToRowNumber(char: string): number {
        // implement dictionary class when there is time
        const chars = ['A', 'B','C', 'D','E', 'F']
        let idx = chars.indexOf(char);
    
        if (idx == -1) {
          throw new Error('charToRowNumber: index is out of range');
        }
    
        return idx + 1;
    }
}