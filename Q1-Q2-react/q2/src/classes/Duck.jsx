import React from "react";
import { Howl } from "howler";


class Duck{
  constructor(name, color, age, weight, image) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.image = image;
  }

  //methods
  show() {
    return `Name: ${this.name}, Color: ${this.color}, Age: ${this.age}, Weight: ${this.weight} kg`;
  }
  quack() {
    const quackCount = Math.floor((this.age * this.weight) / 2);
    console.log("Quack".repeat(quackCount));

    const audio = new Howl({
      src: ["/sound/185546__crazyduckman__quack.wav"], // Corrected path
      volume: 1.0
    });
    for (let i = 0; i < 3; i++) {
      setTimeout(() => audio.play(), i * 500);
    }
  }
  
  
  }

  
  

export default Duck; 