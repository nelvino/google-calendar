export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;

// When you have an union in the type, and you want to omit something, you need to create this UnionOmit. 
// When you add the "T extends unknown ?" it ll distribute it and run the code that is after for all the unions, in this case we unit T and K
