

// Обрати довільну предметну область і у відповідності до неї створити кілька класів, інтерфейсів, що будуть описувати її
// При описі обовязково використати:

// - class (включаючи реалізацію інтерфеса а також поля із різними модифікаторами доступу)

// - generic






// - interface (включаючи наслідування)
interface cpu { 
    brand: string, // - type
    name: string | number, // - union types (поєднання типів)
    generation?: number,
    cores: number,
    threads: number,
    integratedGraphics: boolean
}


// - tuple (кортеж)
type intelCpu = [string, string, number, number, number] 
const i712700: intelCpu = ["i7", "Intel", 12, 20, 2021]
let generation: [number, string][]
generation = [
    [1, 'Core'],
    [2, 'Nehalem'],
    [3, 'Westemere'],
    [4, 'Sandy Bridge'], 
[5, 'Ivy Bridge']
]

// - enum
enum SocketTypes {
    AlderLake = 'LGA1700',
    IvyBridge = 'LGA1151',
    Haswell = 'LGA1150'
}













// class Intel {
//     constructor(parameters) {
        
//     }
// }