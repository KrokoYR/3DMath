import { Point3d } from '../Point/Point3d';
import { Vector2d } from './Vector2d';

export class Vector3d extends Vector2d {
  constructor(firstPoint: Point3d, secondPoint: Point3d) {
    super(firstPoint, secondPoint);
    this.startPoint = firstPoint;
    this.endPoint = secondPoint;
  }

  startPoint: Point3d;

  endPoint: Point3d;

  get coordinates(): Point3d {
    return {
      ...super.coordinates,
      z: this.endPoint.z - this.startPoint.z,
    };
  }

  get length(): number {
    const { x, y, z } = this.coordinates;
    const root = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

    return Math.abs(root);
  }

  get hasZeroCoordinates(): boolean {
    return super.hasZeroCoordinates;
  }

  get isZeroVector(): boolean {
    return super.isZeroVector;
  }
}
