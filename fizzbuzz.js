for(i = 0; i <= 100; i += 1){
  i % 15 === 0 ? console.log('FizzBuzz', i) : 
  i % 3 === 0 ? console.log('Fizz', i) :
  i % 5 === 0 ? console.log('Buzz', i) : console.log(i);
}