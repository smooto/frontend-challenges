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

limits:
  - for the sake of the exercise, one-digit numbers only

other stuff:
- write some tests to verify operations
  - randomized tests would be a good idea

http://localhost:3000/component-challenges/11-24-20
*/
import styles from './11-24-20.module.css'
import { useState, useEffect } from 'react'

export default function neumorphicCalculator() {
  const [ display, setDisplay ] = useState('')
  const [ workingValue, setWorkingValue ] = useState('')
  const [ result, setResult ] = useState(undefined)
  const [ memory, setMemory ] = useState([])

  const setNumber = (e) => {
    const number = e.target.textContent

    setWorkingValue(workingValue + number)
  }

  useEffect(() => {
    setDisplay(workingValue)
  }, [ workingValue ])

  const setOperand = (e) => {
    const operand = e.target.textContent

    setMemory([...memory, `${workingValue} ${operand}`])
  }

  useEffect(() => {
    setWorkingValue('')
  }, [ memory ])

  const showResult = () => {
    const expression = memory.join(' ') + ' ' + workingValue

    setResult(eval(expression))
  }

  useEffect(() => {
    setDisplay(result)
  }, [result])

  const clearAll = () => {
    setMemory([])
  }

  return (
    <div id="container" className={styles.container}>
      <div id="screen" className={styles.screen}>
      <p>{display || '0'}</p>
      </div>
      <div className={styles.buttonsGrid}>
        <button 
          className={`${styles.clearButton} ${styles.contrastButton}`}
          onClick={clearAll}>clear</button>
        <button 
          className={styles.contrastButton}
          onClick={showResult}>=</button>
        <button 
          className={styles.contrastButton}
          onClick={e => setOperand(e)}>+</button>
        <button onClick={e => setNumber(e)}>7</button>
        <button onClick={e => setNumber(e)} >8</button>
        <button onClick={e => setNumber(e)}>9</button>
        <button 
          className={styles.contrastButton}
          onClick={e => setOperand(e)}>-</button>
        <button onClick={e => setNumber(e)}>4</button>
        <button onClick={e => setNumber(e)}>5</button>
        <button onClick={e => setNumber(e)}>6</button>
        <button
          className={styles.contrastButton}
          onClick={e => setOperand(e)}>*</button>
        <button onClick={e => setNumber(e)}>1</button>
        <button onClick={e => setNumber(e)}>2</button>
        <button onClick={e => setNumber(e)}>3</button>
        <button
          className={styles.contrastButton}
          onClick={e => setOperand(e)}>/</button>
        <button onClick={e => setNumber(e)} className={styles.zeroButton}>0</button>
      </div>
    </div>
  )
}
