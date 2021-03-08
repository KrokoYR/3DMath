// import { Point2d } from './Point/Point2d';
import { MathInstance } from './Math3D';
import { Point3d } from './Point/Point3d';
import { Vector3d } from './Vector/Vector3d';

// const point2d = new Point2d(1, 2);
const point3d_1 = new Point3d(1, 2, 3);
const point3d_2 = new Point3d(10, 4, 5);

const vector3d = new Vector3d(point3d_1, point3d_2);
console.log(vector3d.coordinates);

const zeroPoint3d = new Point3d(1, 2, 0);
const zeroVector = new Vector3d(point3d_1, zeroPoint3d);
const zeroVector1 = new Vector3d(point3d_1, zeroPoint3d);

console.log('IS_EQUAL', MathInstance.vector3d.isEqual(zeroVector, zeroVector1));
