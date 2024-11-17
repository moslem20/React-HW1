import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props); 
    this.value = 0; 
  }

  Initialize (initialValue) {
    this.value = initialValue;
  }

  Increment() {
    this.value += 1;
  }

  Go() {
    const numbers = [];
    for (let i = 0; i <= this.value; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}

export default Counter;
