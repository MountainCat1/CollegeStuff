/**
 * W wersji ES6 można definiować klasy, podobnie jak w językach typowanych jak. np. C#, Java
 */

class Car{                                      //klasy korzystają ze strict mode
    static counter;                             //pole statyczne jest przypisane do klasy, każdy obiekt odwołuje się do tego samego pola                                
    #mileage;                                   //pole prywatne zaznaczane jest znakiem '#', musi być "zadeklarowane"!
    static{                                     //statycznych blok inicjalizujący, wykonuje się raz podczas 
       Car.counter = 0;       
    }
    constructor(weight){
        this.weight = weight;                   //pola publiczne można tworzyć wewnątrz konstruktora, nie wymagają deklaracji. Pamiętaj o this!!!
        this.#mileage = 0;
        Car.counter++;                          //odwołanie do pola statycznego wymaga podania klasy!!!
    }
    get mileage(){                              //Można definiować gettery i settery, podobniej jak w obiektach
        return this.#mileage;
    }

    drive(speed, time){                         //metody klasy są funkcjami, ale deklaruje się bez słowa function
        this.#mileage += this.#distance(speed, time);
    }

    #distance(speed, time){                     //metoda prywatna może być wywoływana tylko w klasie
        return speed * time;
    }

    static withMileage(weight, mileage){        //metoda statyczna, która może być wywołana na klasie
        let car = new Car(weight);
        car.#mileage = mileage;                 //metoda statyczna jest wewnątrz klasy, dlatego można tutaj odwołać się do pola prywatnego obiektu tej klasy
        return car;                             
    }
}

class ElectricCar extends Car{                  //klasa może dziedziczyć po jednej klasie
    constructor(weight, power){
        super(weight);                          //wywołanie konstruktora klasy bazowej, zawsze jako pierwsza instrukcja konstruktora!!!
        this.power = power;
    }
}

let car = new Car(45);                              //utworzenie obiektu klasy
console.log(car);                       
console.log("Liczba samochodów: " + Car.counter);   //odwołanie do pola statycznego, liczba wywołań konstruktora    
let mileageCar = Car.withMileage(1000, 2000);       //utworzenie obiektu poprzez wywołanie metody statycznej
console.log(mileageCar);
console.log(mileageCar.mileage);                    //odczyt pola obiektu  
console.log(new ElectricCar(1200, 80));