// Accidental regression during a refactor
export function greet(name) {
  if (name === '') {
    return 'Hello, stranger!';
  }
  // OOPS! I forgot the comma!
  return `Hello ${name}!`;
} 