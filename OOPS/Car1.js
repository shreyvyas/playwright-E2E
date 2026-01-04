class Car1{

    brand;
    color;

    getCarDetails(){
        this.brand = 'BMW';
        this.color = 'Black';
        console.log(this.brand);
        console.log(this.color);
    }


}

const car1 = new Car1();
car1.getCarDetails();