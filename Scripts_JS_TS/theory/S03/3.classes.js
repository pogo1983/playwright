// Before we created simple objects:
const dale = {
  name: 'Dale Cooper',
  age: 40
}

// we can also create objects using classes.

// Example of class:

class Human {
  name = 'Ralph' // class property

  sayHello() {  // class method
    console.log(`Hello! Im ${this.name} and Im pleased to meet You!`)
  }
}

// Class is an 'abstract' entity, but without solid form.

// how to use class?

// this wont work:
// Human

// ...neither this:
// Human.sayHello()
// ...cause will return an error: Property 'sayHello' does not exist on type 'typeof Human'.

// class needs an INSTANCE.

// Instance is a solid object of a class.

// To create an instance we use keyword "new":
new Human()
// Now we have created an OBJECT.

// Lets stop for a moment...

// What is the difference between Class and Object?

// Well... same as between term Human and real person, like You and me.
// Term Human defines activities, that we can (and we are expected to) perform (like walking or speaking).
// Like every human should have a name, or should be able to speak.
// Real person - has a defined name and is able to speak or walk (at same age of course ;).

// ... and now we can get back to our 'new Human()'

// Now we can assign instance to variable:
const human = new Human()

// Human - is a class, that we declare above
// human - is a variable

// ...and use everything what Human has to offer (so methods, properties etc):
console.log('----------------------------------------------------')
console.log('Result of human.sayHello():')
human.sayHello()

// That will result in:
// Hello! Im Ralph and Im pleased to meet You!



// we can also access Human property:
console.log('Result of human.name:')
console.log(human.name)

console.log('----------------------------------------------------')
// or we can change property:
human.name = 'Jonathan'

// and now it will return new value:
console.log('Result of human.sayHello() after name change:')
human.sayHello()
console.log('Result of human.name after name change:')
console.log(human.name)


console.log('----------------------------------------------------')
console.log('Lets check new human...')
// but new human will have default value of name:
const human2 = new Human()
console.log('Result of human2.sayHello():')
human2.sayHello()
console.log('Result of human.sayHello():')
human.sayHello()


console.log('----------------------------------------------------')
console.log('Result of console.log(human):')
console.log(human)

console.log('Result of JSON.stringify(human):')
console.log(JSON.stringify(human))
