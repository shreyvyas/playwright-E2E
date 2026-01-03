class Car {

    brand = "BMW";
    color = "Black";

    start(){
        console.log("Car is started");
    }

    details(){
        console.log(this.brand);
        console.log(this.color);
    }

}

const car1 = new Car();
car1.start();
const car2 = new Car();
car2.start();

// console.log(car1.color);
// console.log(car2.brand);

car1.details();
car2.details(); 