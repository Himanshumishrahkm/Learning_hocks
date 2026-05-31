


const Button = ({value,val}) => {
 let fun = () =>
 {
    if(val === "UP")
            value(prev => prev+1);
        else
            value(prev => prev-1);
 }
  return (
    <div>
      <button className="bg-white h-30 w-60 border-4 rounded-xl
             flex justify-center items-center
             hover:bg-gray-600 hover:text-black
             hover:scale-105 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300"  onClick={fun}>
            <h1 className="text-4xl ">{val}</h1>
      </button>
    </div>
  )
}

export default Button
