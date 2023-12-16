/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'
import { format, evaluate } from 'mathjs'
import Button from './components/Button'

const containerStyle = css`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  justify-content: center;
  width: 250px;
  height: 300px;
`

const displayStyle = css`
  border: none;
  border-radius: 5px;
  background: #1d1e24;
  text-align: right;
  color: #fff;
  padding: 10px;
  font-size: 20px;
`
const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`

const clearBtnStyle = css`
  display: flex;
  justify-content: center;
`

const App = () => {
  const [display, setDisplay] = useState("")

  const handleBtnClick = (val: string) => {
    setDisplay(prev => prev + val)
  }

  const clear = () => {
    setDisplay("")
  }

  const calcResult = () => {
    try {
      const result = evaluate(display)
      setDisplay(format(result, { precision: 14 }))
    } catch (error) {
      setDisplay("Error")
    }
  }

  const buttonKeys = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "/", "."]

  return (
    <div css={containerStyle}>
      <div css={displayStyle}>{display || "0"}</div>
      <div css={gridStyle}>
        {buttonKeys.map(btn =>(
          <Button key={btn} onClick={() => handleBtnClick(btn)} btnText={btn} />
        ))}
        <Button onClick={() => calcResult()} btnText="=" />
      </div>
      <div css={clearBtnStyle}>
        <Button onClick={() => clear()} btnText="Clear" />
      </div>
    </div>
  )
}

export default App