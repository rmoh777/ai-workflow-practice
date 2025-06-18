// Accidental regression during a refactor
export function greet(name) {
  if (name === '') {
    return 'Hello, stranger!';
  }
  // Fixed: Added the missing comma!
  return `Hello, ${name}!`;
} 