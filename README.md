 function Animals (name,hunger,tiredness,lonliness,happiness)
{
    this.name = name,
    this.hunger = hunger,
    this.tiredness = tiredness,
    this.lonliness  = lonliness,
    this.happiness = happiness
};

Animals.prototype = 
{
    eat : function(feed)
    {
        this.hunger = this.hunger + feed;
        this.happiness = this.happiness + feed;
    },

    sleep : function(time)
    {
        this.tiredness = this.tiredness  - time   ;
        this.hunger = this.hunger - time;
    },
    play : function(x)
    {
        this.happiness = this.happiness + x;
        this.hunger = this.hunger - x;
    },
    pet : function(z)
    {
        this.lonliness = this.lonliness + z;
      
    }



};





let Cat = new Animals("Cat",100,10,100,100);


Cat.status = function() {
  
        if(this.hunger >= 10)
        {
            console.log(`${this.name} not hungry :   ${this.hunger}`);
        }
        else if(this.hunger <= 0 )
        {
            console.log(`${this.name} very hungry ${this.hunger} `);
            
        }


        if(this.tiredness >=10 )
        {
            console.log(`${this.name} Not tired :   ${this.tiredness}`);
        }

        else if(this.tiredness <0  )
        {
            console.log(`${this.name} very tired ${this.tiredness} `);
            
        }

        if(this.happiness >= 10)
        {
            console.log(`${this.name} Very Happy:   ${this.happiness}`);
        }

        else if(this.happiness <= 0 )
        {
            console.log(`${this.name} not Happy ${this.happiness} `);
            
        }

        if(this.lonliness >= 10)
        {
            console.log(`${this.name} Not Lonely :   ${this.lonliness}`);
        }

        else if(this.lonliness <= 0 )
        {
            console.log(`${this.name} very  lonely ${this.lonliness} `);
            
        }

};


// Cat.eat(100);
// Cat.sleep(10);
// Cat.play(10);
// Cat.pet(20);
console.log(Cat);
console.log(Cat.status());



// let Animals = function(name,tiredness,hunger,lonliness,happiness)
// {
//     this.name=name,
//     this.tiredness = tiredness,
//     this.hunger = hunger,
//     this.lonliness = lonliness,
//     this.happiness = happiness,

//     this.eat = function(food){
//         this.hunger += food;
//     },
//     this.sleep = function(time)
//     {
//         this.tiredness
//     }
// }

    

// let Cat = new Animals(Cat,50,50,50,50)








