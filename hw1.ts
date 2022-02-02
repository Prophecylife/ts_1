

// Обрати довільну предметну область і у відповідності до неї створити кілька класів, інтерфейсів, що будуть описувати її
// При описі обовязково використати:

// - interface (включаючи наслідування)
interface cpu { 
    brand: string, // - type
    
    generation?: number,
    cores: number,
    threads: number,
    integratedGraphics: boolean
}

interface mobileCpu extends cpu {
    architecture: string,
    bitsupport64?: boolean
}

class Amd {
    private id: number;
    name: string | number; // - union types (поєднання типів)
    public mfYear: number;
    protected subName: string;
    constructor(name: string) {
        this.name = name;
    }
}


// - class (включаючи реалізацію інтерфеса а також поля із різними модифікаторами доступу)
class Intel extends Amd implements cpu {
    brand: string; // - type
    name: string | number; // - union types (поєднання типів)
    generation?: number;
    cores: number;
    threads: number;
    integratedGraphics: boolean;
    constructor(name: string, subName?: string) {
        super(name);
        this.subName = subName;
    }
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

// - generic
const modelSocket = <M, T extends keyof M> (SocketTypes: M, cpuName: T) :
    [string, T] => [`Core i7 3770K has ${SocketTypes[cpuName]}`, cpuName]

    console.log(modelSocket(SocketTypes, 'IvyBridge'));
    
    



