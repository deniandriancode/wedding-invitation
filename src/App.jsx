import { useState } from 'react';
import { encrypt, decrypt } from "../utils/cryptography.js";

function App() {
	return <div className="text-emerald-800">{encrypt("ytu7263bcw907qe05b87023b7028b73b50v8730475vb08734v05", "John Doe")}</div>;
}

export default App;
