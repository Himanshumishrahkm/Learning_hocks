import Button from '../button/Button.jsx'

const section2 = ({value}) => {
  return (
    <div className=' w-150 flex justify-between'>
      <Button value = {value} val = "UP"/>
      <Button value = {value} val = "DOWN" />
    </div>
  )
}

export default section2
