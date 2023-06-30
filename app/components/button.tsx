const Button = ({btnName, btnStyle}) => {
  return <button className={`w-full rounded-md p-1 ${btnStyle}`}>{btnName}</button>
}

export default Button