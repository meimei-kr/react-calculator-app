/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const buttonStyle = css`
  border: none;
  border-radius: 5px;
  background: #bfc2c2;
  color: #1d1e24;
  padding: 10px;
  text-align: center;
`

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  btnText: string
}

const Button = ({ onClick, btnText }: ButtonProps) => {
  return (
    <button onClick={onClick} css={buttonStyle}>{btnText}</button>
  )
}

export default Button