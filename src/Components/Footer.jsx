import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='max-w-[1240px] text-gray-300 py-16 px-4 grid lg:grid-cols-3 gap-8 mx-auto'>
        <div>
             <h1 className='w-full text-[#00df9a] text-3xl font-bold'  >React.</h1>
             <p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
           Velit quas delectus voluptatem nemo ad consequatur temporibus, 
           placeat ipsa qui animi nihil harum voluptatum 
           facere inventore, dignissimos blanditiis eos sapiente similique.
             </p>
              <div className='flex justify-between md:w-[75%] my-6 '>
          <FaDribbbleSquare size={30}/>
          <FaFacebookSquare size={30}/>
          <FaGithubSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
        </div>
        </div>
        <div className='flex justify-between lg:col-span-2 mx-8 mt-6' >
          <div>
            <h6 className='font-bold text-gray-300'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
           <div>
            <h6 className='font-bold text-gray-300'>Solution</h6>
            <ul>
              <li className='py-2 text-sm'>Stratigies</li>
            <li className='py-2 text-sm'>Problem Solve</li>
            <li className='py-2 text-sm'>Commitment</li>
            <li className='py-2 text-sm'>Authentic</li>
            </ul>
          </div>
           <div>
            <h6 className='font-bold text-gray-300'>Associate</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
        </div>
       

      
    </div>
  )
}

export default Footer
