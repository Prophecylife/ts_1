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
// - enum
var SocketTypes;
(function (SocketTypes) {
    SocketTypes["AlderLake"] = "LGA1700";
    SocketTypes["IvyBridge"] = "LGA1151";
    SocketTypes["Haswell"] = "LGA1150";
})(SocketTypes || (SocketTypes = {}));
// - generic
var modelSocket = function (SocketTypes, cpuName) { return ["Core i7 3770K has ".concat(SocketTypes[cpuName]), cpuName]; };
console.log(modelSocket(SocketTypes, 'IvyBridge'));
// class Intel {
//     constructor(parameters) {
//     }
// }
