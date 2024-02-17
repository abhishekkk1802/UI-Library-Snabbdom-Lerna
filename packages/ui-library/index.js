// Import Snabbdom
const snabbdom = require('snabbdom');
const { h } = snabbdom;

// Define UI Library class
class UI {
  constructor() {
    this.state = { count: 0 };
    this.listeners = [];
  }

  // Method for defining template
  template = (state) => {
    return h('div', {}, [
      h('h1', {}, state.count),
      h('button', { on: { click: this.handleClick } }, 'Add')
    ]);
  };

  // Method for updating state and triggering re-render
  updateState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener());
  };

  // Method for handling button click
  handleClick = () => {
    this.updateState({ count: this.state.count + 1 });
  };

  // Method for adding lifecycle event listener
  addLifecycleListener = (listener) => {
    this.listeners.push(listener);
  };
}

// Export UI Library instance
module.exports = new UI();
