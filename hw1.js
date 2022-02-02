// Обрати довільну предметну область і у відповідності до неї створити кілька класів, інтерфейсів, що будуть описувати її
// При описі обовязково використати:
var i712700 = ["i7", "Intel", 12, 20, 2021];
var generation;
generation = [
    [1, 'Core'],
    [2, 'Nehalem'],
    [3, 'Westemere'],
    [4, 'Sandy Bridge'],
    [5, 'Ivy Bridge']
];
var SocketTypes;
(function (SocketTypes) {
    SocketTypes["AlderLake"] = "LGA1700";
    SocketTypes["IvyBridge"] = "LGA1151";
    SocketTypes["Haswell"] = "LGA1150";
})(SocketTypes || (SocketTypes = {}));
console.log(SocketTypes.AlderLake);
// class Intel {
//     constructor(parameters) {
//     }
// }
