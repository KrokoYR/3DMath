import { Point2d } from './Point2d';

export class Point3d extends Point2d {
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  z: number;
}
