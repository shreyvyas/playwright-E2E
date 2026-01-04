class Car2{

    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }

    getCarDetails(){
        console.log("Car is: " +this.brand + " and car color is: " + this.color);
    }

}

const car1 = new Car2("BMW", "Black");
car1.getCarDetails();