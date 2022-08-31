const args = process.argv.slice(2);

let numbers = args.filter(numbers => { 
  return numbers > 0;
}); 

const timer = () => {
  for (const element of numbers) {
    setTimeout(() => {
      console.log('beep'); //visual display for beep sound
      return process.stdout.write('\x07');
    }, element * 1000) //determines the second(s) timer
  }
};

timer(numbers);
