// Bob needs a fast way to calculate the volume of a cuboid with three values: 
// the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      // your code here
      if (length <= 0 || width <= 0 || height <= 0) {
          // Check if any dimension is non-positive
          return "Dimensions must be positive numbers";
      }
  
      // Calculate the volume
      var volume = length * width * height;
  
      return volume;
    }
}