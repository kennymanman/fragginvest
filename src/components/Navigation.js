import React from 'react';
import fragg from "../images/fragg.png"

export default function Navigation() {
  return (
    <>
    
    <div className='mx-12 flex justify-between relative py-3'>

        
  


{/* <h1 className='text-3xl tracking-tighter'>Fragg Invest</h1> */}

<img className='w-48 h-12 object-cover' src={fragg} alt=""  />

<div className='flex gap-8'>
<h2 className='text-xl tracking-tighter text-white'>Impact</h2>
<h2 className='text-xl tracking-tighter text-white'>Funds</h2>
<h2 className='text-xl tracking-tighter text-white'>Portfolio</h2>
<h2 className='text-xl tracking-tighter text-white'>Advisory</h2>
<h2 className='text-xl tracking-tighter text-white'>Work with us</h2>
<h2 className='text-xl tracking-tighter text-white'>About</h2>
{/* <h2 className='text-xl tracking-tighter'>Contact</h2> */}
</div>




<div>
<h2 className='text-xl tracking-tighter border-white text-white border-2 px-3 rounded-full hover:bg-black hover:text-white'>Contact</h2>
</div>

    </div>
    </>
  );
}
