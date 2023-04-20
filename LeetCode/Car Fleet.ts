// 853. Car Fleet. TypeScript. LeetCode
// function carFleet(target: number, position: number[], speed: number[]): number {
// 	let fleets: number[][] = [];
// 	let sped = [...speed];
// 	let pos = [...position];
// 	let fleetsArrived: number[][] = [];
// 	let arrived: number[] = [];
// 	while(!areAllCarsOnTarget(target, pos)) {
// 		pos = advanceCars(target, pos, sped);
// 		fleets = getCurrentFleets(target, arrived, pos);
// 		for (const fleet of fleets) {
// 			if (pos[fleet[0]] >= target) {
// 				arrived.push(...fleet);
// 				fleetsArrived.push(fleet)
// 			}
// 			console.log("Updated arrived: ", arrived);
// 			console.log("Fleets arrived: ", fleetsArrived);
			
			
// 			sped = updateFleetSpeed(fleet, sped)
// 		}
// 	}
// 	console.log(fleetsArrived);
	
// 	return new Set(fleetsArrived).size;
// }

// function updateFleetSpeed(fleet: number[], sped: number[]) {
// 	const copySpeed = [...sped];
// 	console.log("Current speeds", copySpeed)
// 	let lowestSpeed = copySpeed[fleet[0]];
// 	for (let i = 1; i < copySpeed.length; i++) {
// 		if (i in fleet) {
// 			const carSpeed = copySpeed[i];
// 			if (carSpeed < lowestSpeed) {
// 				lowestSpeed = carSpeed;
// 			}
// 		}
// 	}

// 	for (const i of fleet) {
// 		copySpeed[i] = lowestSpeed;
// 	}


// 	console.log("Updated fleet speeds, current sped: ", lowestSpeed);
// 	return copySpeed;
// }

// function areAllCarsOnTarget(target: number, position: number[]): boolean {
// 	return position.filter(pos => pos < target).length === 0;
// }

// function advanceCars(target: number, position: number[], speed: number[]): number[] {
// 	const copyPosition = [...position]
// 	for (let i = 0; i < copyPosition.length; i++) {
// 		if (copyPosition[i] >= target) {
// 			continue;
// 		}

// 		copyPosition[i] += speed[i];
// 	}

	
// 	console.log("Moved cars. Latest positions: ", copyPosition);
// 	return copyPosition;
// }

// function getCurrentFleets(target: number, alreadyArrived: number[], position: number[]): number[][] {
// 	const fleets: number[][] = []
// 	const copyPosition = [...position];

// 	position.forEach((elem, i) => {
// 		if (i in alreadyArrived) {
// 			return
// 		}

// 		if (elem >= target) {
// 			return
// 		}

// 		if (copyPosition[i] === -1) {
// 			return
// 		}

// 		const fleet: number[] = [];
// 		fleet.push(i);
// 		copyPosition[i] = -1;
// 		let j = copyPosition.findIndex(pos => pos === elem);
// 		console.log("Trying to find fleet for ", elem);
// 		console.log("Found ", j);
		
		
// 		while (j !== -1 && !(j in alreadyArrived)) {
// 			fleet.push(j)
// 			copyPosition[j] = -1;
// 			j = copyPosition.findIndex(pos => pos === elem);
// 		}
// 		fleets.push(fleet);
// 	})

// 	console.log("Current fleets: ", fleets);
// 	return fleets;
// }

// const finalFleets = carFleet(12, [10,8,0,5,3], [2,4,1,1,3]);
// console.log(finalFleets);

function carFleet(target: number, position: number[], speed: number[]): number {
	const sortedDict: any[] = []

	for (let i = 0; i < position.length; i++) {
		const element = {
			"position": position[i],
			"speed": speed[i]
		};
		sortedDict.push(element);
	}

	sortedDict.sort((a, b) => b.position - a.position);

	const stack: any[] = [];
	sortedDict.forEach((element, i) => {
		
		console.log("Status of stack: ", stack);
		
		const distance = (target - element.position) / element.speed
		console.log("Current position: ", element.position, "Current distance: " ,distance);

		const latest = stack.pop();
		
		if (latest === undefined) {
			console.log("First fleet found: ", i);
			
			stack.push({
				"index": i,
				"distance": distance
			})
			return
		}

		stack.push(latest);
		if (distance > latest.distance) {
			console.log("Another fleet was found.", i);
			
			stack.push({
				"index": i,
				"distance": distance
			})
		}
	})

	console.log(stack);
	
	return stack.length;
};

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));
// console.log(carFleet(10, [3], [3]));
console.log(carFleet(100, [0,2,4], [4,2,1]));