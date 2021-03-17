(function () {
  class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello(a: string) {
      console.log(a + '死了')
    }
  }

  class Dog extends Animal {
    sayHello() {
      super.sayHello('a')
    }

    run() {
      console.log(`${this.age + ''}死了`)
      console.log(typeof (this.age * 1))
      console.log(typeof (this.age + ''))
    }
  }

  class Cat extends Animal {}

  const dog = new Dog('你妈', 5)
  const cat = new Cat('你爹', 4)
  console.log(dog)
  dog.sayHello()
  dog.run()
  //   cat.run()
  console.log(cat)
  cat.sayHello('你爹')
})()
