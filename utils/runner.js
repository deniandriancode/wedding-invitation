"use strict";
import { encrypt, decrypt } from "./cryptography.js";

const msg = encrypt("ytu7263bcw907qe05b87023b7028b73b50v8730475vb08734v05", "John Doe");
console.log(msg);
const dec = decrypt("ytu7263bcw907qe05b87023b7028b73b50v8730475vb08734v05", msg);
console.log(dec);
