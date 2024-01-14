import React, { useState } from 'react';

export default function ExpandableItem({itemData}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>

<article key={itemData.id} className="grid grid-cols-3 my-5">

    <div className='col-span-1'>
      <p className="text-white tracking-tighter text-4xl">{itemData.number}</p>
</div>



<div className='col-span-1'>
      <section className={`grid ${isExpanded ? 'expanded' : ''} `}>
        <p className="text-white tracking-tighter text-2xl ">{itemData.question}</p>
        {isExpanded && (
          <p className="text-white pt-4">{itemData.answer}</p>
        )}
      </section>
</div>



<div className='col-span-1 text-end'>
      <button onClick={handleToggle}>
        {isExpanded ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-white"> <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" /></svg>
     }
</button>
</div>

    </article>



    <hr className='border-white mt-4'/>

    
    </>
  );
}
