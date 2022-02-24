function car_Dictionary() { //define function
    var Car = {             //define variable
        Make: "Toyota",     //1st KVP
        Model: "Camry SE",  //2nd KVP
        Year: "2014",       //3rd KVP
        Mileage: 140000     //4th KVP
    }
    delete Car.Model       //delete 2nd KVP
    document.getElementById("my_Dictionary").innerHTML = Car.Model; //print deleted KVP = undefined
}