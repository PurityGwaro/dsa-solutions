class Stack {
  constructor() {
    this.items = []; // we'll store everything in an array
  }

  // Add an item to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove the top item
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.items.pop();
  }

  // See what's on top without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get size of the stack
  size() {
    return this.items.length;
  }

  display(){
    return this.items
  }
}

const newStack = new Stack()

newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
newStack.push(5)
newStack.push(6)

newStack.pop()
newStack.pop()

console.log("POP:::::", newStack.pop())

console.log("PEEEK:::", newStack.peek())
console.log("display:::", newStack.display())
console.log("empty??", newStack.isEmpty())

