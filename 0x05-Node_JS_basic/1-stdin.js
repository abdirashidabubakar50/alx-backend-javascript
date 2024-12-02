process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
