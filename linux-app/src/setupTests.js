// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


const originalError = console.error;
console.error = (...args) => {
  if (args[0] && args[0].includes('`ReactDOMTestUtils.act` is deprecated')) {
    return; // Ignora el warning específico
  }
  originalError(...args);
};