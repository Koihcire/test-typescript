var movieTitle = "Captain America";
movieTitle = "Avengers";
// movieTitle = 9;
movieTitle.toUpperCase();
console.log(movieTitle);
var x = {
    a: "a-value",
    b: "b-value",
    c: 3
};
var square = x.c * x.c;
// console.log(x.avalue);
// console.log(d);
console.log(square);
var y = 5;
var area = 0;
// if (typeof y === "number"){
//     area = y^2;
// }
area = Math.pow(y, 2);
console.log(area);
var graph = [55.2, 41.2];
console.log(graph[1]);
var car = {
    type: "toyota"
};
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections);
