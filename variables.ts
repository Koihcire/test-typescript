let movieTitle: string = "Captain America";
movieTitle = "Avengers";
// movieTitle = 9;
movieTitle.toUpperCase();
console.log(movieTitle);


const x: unknown = {
    a: "a-value",
    b: "b-value",
    c: 3
};

const square = (x as {c: number}).c * (x as {c: number}).c;


// console.log(x.avalue);
// console.log(d);

console.log(square);

const y: unknown = 5;

let area = 0;
// if (typeof y === "number"){
//     area = y^2;
// }

area = (y as number)**2;

console.log(area);

const graph: [x: number, y:number] = [55.2, 41.2];

console.log (graph[1]);


const car : {
    type: string,
    mileage?: number
} = {
    type: "toyota",
    // mileage: 200
};

enum CardinalDirections {
    North,
    East,
    South,
    West
}

console.log(CardinalDirections)
