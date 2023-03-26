// 128. LeetCode Longest Consecutive Sequence

// First approach. Sorting then checking in O(n)

// function quickSort(nums: number[]): number[] {
// 	const pivotIndex = Math.round(nums.length / 2);
// 	if (nums.length == 0) {
// 		return [];
// 	} else if (nums.length == 1) {
// 		return nums;
// 	}

// 	const pivot = nums[pivotIndex];
// 	const leftArray: number[] = [];
// 	const rightArray: number[] = [];

// 	for (let i = 0; i < nums.length; i++) {
// 		if (i !== pivotIndex) {
// 			const element: number = nums[i];
// 			if (element < pivot) {
// 				leftArray.push(element);
// 			} else {
// 				rightArray.push(element);
// 			}
// 		}
// 	}

// 	return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
// }

// function longestConsecutive(nums: number[]): number {
// 	const sorted = nums.slice().sort((a, b) => a - b);

// 	let longest = 0;
// 	let current = 1;
// 	let element = sorted[0];
// 	for (let i = 1; i < sorted.length; i++) {
// 		if (element + 1 === sorted[i]) {
// 			current++;
// 			longest = current > longest ? current : longest;
// 		} else {
// 			current = 1;
// 		}

// 		element = sorted[i];
// 	}

// 	return longest;
// }

// Second approach. Using clever logic. O(n)

function longestConsecutive(nums: number[]): number {
	// Creamos un Set que nos facilita la busqueda e iteracion de los elementos
	const numbers = new Set(nums);

	// Inicializamos las variables que sostendran los datos de las secuencias
	let longest = 0;
	let current = 0;

	// Iteramos sobre cada numero de los presentes en el set
	for (const num of numbers) {
		// Si esta presente un numero previo al actual significa que este no es el inicio de una secuecnia
		if (numbers.has(num - 1)) {
			continue; // Por tanto, continua con el siguiente numero
		}

		// Si llegamos hasta aqui, significa que estamos frente al inicio de una secuencia, por tanto
		current = 1; // Reseteamos la variable para que previas secuencias no afecten el valor de la secuencia actual

		// Iteramos mientras el numero siguiente de la secuencia exista
		while (numbers.has(num + current)) {
			current++; // Incrementamos mientras la secuencia siga.
		}

		// Llegando hasta aqui, tenemos la longitud de la secuencia debido a que el anterior ciclo ya no encontro un elemento siguiente, por tanto
		longest = current > longest ? current : longest; // Comprobamos si la secuencia actual fue mas larga que cualquiera de las anteriores, si es asi, la asignamos.
	}

	// Tras llegar hasta aqui, ya iteramos sobre todas las posibles secuencias
	return longest; // Por tanto, retornamos la mas larga
}
