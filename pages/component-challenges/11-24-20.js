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
    <div className={styles.container}>
      <p>Hello, world!</p>
    </div>
  )
}
