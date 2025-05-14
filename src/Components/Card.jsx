import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

import CarsItem from '../CarsItem'


const Card = () => {
    return (
           <div className='w-full py-[10rem] px-4 bg-white'>

         <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8'>
          <CarsItem

          img={Single}
          title='Single User'
          price='$149'
          features={['500 GB Storage','1 Granted User','Send up to 2 GB']}
          btncolor='bg-[#00df9a]'
          
          />
          <CarsItem

          img={Double}
          title='Double User'
          price='$249'
          features={['1 TB Storage','2 Granted User','Send up to 4 GB']}
          btncolor='bg-black text-white'
        //   cardSize='scale-105 hover:scale-110'
          />
          <CarsItem 

          img={Triple}
          title='Triple User'
          price='$349'
          features={['5 TB Storage','3 Granted User','Send up to 9 GB']}
          btncolor='bg-[#00df9a]'
          
          />
           </div>

        </div>
    )
}

export default Card





