const { default: axios } = require('axios');

class Dog{

    constructor(name = 'Rexi', age = 1, hungry = 4, sex = "male"){
        this.name = name;
        this.age = age;
        this.hungry = hungry;
        this.sex = sex;
    }
    setName(name){
        this.name = name;
    }
    growUp(){
        this.age++;
    }
    howMuchHungry(hungry){
        if(hungry > 10 || hungry < 0){
            throw new Error('hungry must be between 0 to 10');
            
        }
        else{
            this.hungry = hungry;
        }
    }
    feed(){
        if(this.hungry > 5){
            this.hungry = 0;
            console.log("the pet ate");
        }
        else console.log("the pet is not hungry");
    }
    async speak(url){
        // console.log("taking dogs");
        console.log("THE DOG SAY: ")
        console.log((await axios.get(url)).data.quote)
            
            // .then(result => {
                // console.log(result.data.quote);})
            // .catch(error => {console.log(error)});
    }

}
(async () => {
    const dog1 = new Dog();
    console.log(dog1);
    dog1.setName("RAMI");
    console.log(dog1);
    dog1.growUp();
    console.log(dog1)
    dog1.howMuchHungry(9);
    console.log(dog1);
    dog1.feed();
    dog1.feed();
    dog1.howMuchHungry(6);
    dog1.feed();
    dog1.feed();
    await dog1.speak('https://api.kanye.rest/');
    console.log("THE END ");
    console.log();
    dog1.howMuchHungry(-1);
})();
// 


