import { Vector3d } from '../Vector/Vector3d';

class VectorMath3D {
  isEqualLength(vector1: Vector3d, vector2: Vector3d) {
    return vector1.length === vector2.length;
  }

  crossProduct(vector1: Vector3d, vector2: Vector3d) {
    const { x: x1, y: y1, z: z1 } = vector1.coordinates;
    const { x: x2, y: y2, z: z2 } = vector2.coordinates;

    return {
      x: y1 * z2 - z1 * y2,
      y: z1 * x2 - x1 * z2,
      z: x1 * y2 - y1 * x2,
    };
  }
}

export const Vector3D = new VectorMath3D();
