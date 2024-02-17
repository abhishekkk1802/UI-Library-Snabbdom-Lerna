// Import Snabbdom
const snabbdom = require('snabbdom');
const UI = require('../packages/ui-library');

// Destructure h and patch from snabbdom
const { h, patch } = snabbdom.init([
  require('snabbdom/modules/eventlisteners').default
]);

// Function to render UI
function render() {
  // Create virtual DOM based on UI state
  const newVNode = UI.template(UI.state);

  // Patch the DOM with the new virtual DOM
  patch(oldVNode, newVNode);

  // Update oldVNode with the new virtual DOM for the next render
  oldVNode = newVNode;
}

// Initialize oldVNode with an empty h1 element
let oldVNode = h('h1', {}, '0');

// Mounting lifecycle event
UI.addLifecycleListener(() => {
  console.log('Component mounted');
});

// State change lifecycle event
UI.addLifecycleListener(() => {
  console.log('State changed:', UI.state);
});

// Render initial UI
render();

// Mount the UI to the app container
const container = document.getElementById('app');
patch(container, oldVNode);

// Handle button click event
container.addEventListener('click', () => {
  // Increment count in UI state
  UI.updateState({ count: UI.state.count + 1 });
});
