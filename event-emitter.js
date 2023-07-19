//2694. Event Emitter

class EventEmitter {
  constructor() {
    this.eventSubscriptions = {};
  }

  subscribe(event, cb) {
    if (!this.eventSubscriptions[event]) {
      this.eventSubscriptions[event] = [];
    }

    const subscription = { cb };
    this.eventSubscriptions[event].push(subscription);

    return {
      unsubscribe: () => {
        const index = this.eventSubscriptions[event].indexOf(subscription);
        if (index !== -1) {
          this.eventSubscriptions[event].splice(index, 1);
        }
      },
    };
  }

  emit(event, args = []) {
    const callbacks = this.eventSubscriptions[event];
    if (!callbacks) {
      return [];
    }

    return callbacks.map((subscription) => subscription.cb(...args));
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

console.log(emitter.emit("onClick")); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit("onClick")); // []
