/*
11-24-2020 challenge

component: calculator
aesthetic: neumorphism
stretch: responds to keyboard inputs

features:
- operators: add, subtract, multiply, divide
- equals and clear
- display number currently being entered
- on selecting operator...
  - clear current number from view
  - append number and operator to the total operation
- on selecting "="...
  - perform total operation
  - display result

other stuff:
- write some tests to verify operations
  - randomized tests would be a good idea

http://localhost:3000/component-challenges/11-24-20
*/
import styles from './11-24-20.module.css'

export default function neumorphicCalculator() {
  return (
    <div id="container" className={styles.container}>
      <div id="screen" className={styles.screen}>
        {/* TODO: number displays */}
      </div>
      <div className={styles.buttonsGrid}>
        <button className={styles.clearButton}>clear</button>
        <button>=</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>x</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>/</button>
        {/* <button>0</button> */}
      </div>
    </div>
  )
}
