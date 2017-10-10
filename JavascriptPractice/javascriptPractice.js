var peopleFactor = function(name, age, state){

	//empty objects
	var temp = {};
	//var temp = new objects;

	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = function(){
		console.log(this.name + ", "+this.age+", "+this.state);
	};

	return temp;
	
};

var peopleConstructor = function(name, age, state){
	this.name = name;
	this.age = age;
	this.state = state;

	this.printPerson = function(){
		console.log(this.name + ", "+this.age+", "+this.state);
	}
};

var personConstructor = new peopleConstructor('John',23,'CA');

var personFactor = peopleFactory('David',23,'CA');

person1.printPerson();