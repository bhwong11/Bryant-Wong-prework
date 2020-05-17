const myFunction = function(event) {
  document.write('Hooray!!')
}
const testElement = document.querySelector('#test');

// Add an event listener that triggers `myFunction` when the mouse enters the `#test` element.
testElement.addEventListener('mouseenter', myFunction);

// Use `document.querySelector()` to obtain a reference to the `#test` element.

// Add an event listener that triggers `myFunction` when the mouse enters the `#test` element.
