import { describe, it, expect } from 'vitest';
// This will error because greet doesn't exist yet. This is intentional.
import { greet } from './greeter.js';

describe('Greeter Function', () => {
  it('should return a standard greeting for a name', () => {
    expect(greet('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty strings by greeting a stranger', () => {
    expect(greet('')).toBe('Hello, stranger!');
  });
});