function car_Dictionary() {
    var Car = {
        Make: "Toyota",
        Model: "Camry SE",
        Year: "2014",
        Mileage: 140000
    }
    document.getElementById("my_Dictionary").innerHTML = Car.Model;
}