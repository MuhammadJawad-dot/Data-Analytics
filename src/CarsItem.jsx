import React from 'react'

const CarsItem = ({img,title,price,features,btncolor,cardSize}) => {
  return (
      <div className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  transform hover:scale-105 duration-300 transition-all `}>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={img} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
              <p className='text-center text-4xl font-bold'>{price}</p>
              <div className='text-center font-medium'>
               {features.map((features,index)=>(
                <p  key={index} className='py-2 border-b mx-8 mt-8'>
                    {features}</p>
                ))}
                         
                
               
              </div>
                           <button className={`w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ${btncolor}`}>Start Trial</button>

          </div>
  )
}

export default CarsItem
