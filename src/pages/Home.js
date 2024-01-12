import React from 'react';
import Navigation from '../components/Navigation';
import homeimage from "../images/homeimage.jpg"
import asset from "../images/asset.jpg"
import Footer from '../components/Footer';
import cap from "../images/cap.jpg"
import advisory from "../images/advisory.jpg"
import rome from "../images/rome.jpg"


export default function Home() {
  return (
    <>
   

    <div className='h-screen relative'>

        <img className='absolute object-cover h-full w-full ' src={rome} alt="" />
        <Navigation/>

    <h1 className='tracking-tighter text-9xl text-center text-white relative mt-32'>Unleash your financial potential.</h1>
    <h2 className='tracking-tighter relative text-center text-xl mx-56 mt-10 text-white'>We are Fragg Invest, your premier destination for top-notch financial advisory services. We take immense pride in being a leading authority in the financial consulting industry, delivering expert guidance and personalized solutions to clients seeking to achieve their financial goals.</h2>
    

    <div className='flex justify-center relative mt-12 '>
        <button className='border-2 border-white text-white tracking-tighter rounded-full px-4 py-1 text-xl mx-2 hover:bg-white hover:text-black '>Watch Videos</button>

        <button className='border-2 border-black tracking-tighter rounded-full px-4 py-1 text-xl bg-black text-white mx-2 flex hover:bg-green-500 hover:text-black'>Get Started
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

        </button>
    </div>

</div>






<div className='bg-blue-200'>


<div className='mx-12 '>

    <div className='grid grid-cols-3 pt-20'>

<div className='col-span-2'>
<p className='tracking-tighter text-7xl text-black '>We help private investors <br/>to multiply their spare money.</p>

<button className='border-black border-2 rounded-full p-5 mt-5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
</svg>
</button>

</div>


<div className='col-span-1'>
<p className='tracking-tighter text-3xl '>Investing for tomorrow, today. Discover how to grow your wealth strategically.</p>

<hr className='border-2 border-black my-9'/>

<p className='tracking-tighter text-lg'>With our international team in different regions we are reaching out to provide our services worldwide. The headquarter is located in Germany and coordinating all global company activities. Also we have an office in Lagos, Nigeria operating under the legal form Fragg Investment Management Ltd. for the activities in Africa and another office close to Guadalajara, Mexico for activities in Latin America</p>

<p className='tracking-tighter text-lg mt-9'>Fragg-Invest actually advises own funds in Luxemburg, Africa and also funds of well-known impact investors.</p>
</div>

</div>



<hr className='border-black mt-32'/>

<div className='grid grid-cols-3 pt-20'>

<div className='col-span-2 '>
<p className='tracking-tighter text-7xl text-black '>Who we are &<br/>what we do</p>



<button className='border-black border-2 rounded-full p-5 mt-5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</button>


<p className='tracking-tighter text-3xl mt-36'>We target our investments with a triple bottom line<br/> approach – Profit, People and Planet.</p>


</div>


<div className='col-span-1'>
<p className='tracking-tighter text-3xl '>FRAGG’s main target is investing in high-growth companies in Africa, Latin America, Caribbean and Asia that promote social impact projects</p>

<hr className='border-2 border-black my-9'/>

<p className='tracking-tighter text-lg'>Fragg-Invest GmbH is a leading impact investment manager and advisor specialized on mobilization and management of funds with a strong focus on impact investments in green, social and sustainable domains according to the Sustainable Development Goals of the United Nations</p>

<p className='tracking-tighter text-lg mt-9'>We work with financial institutions, impact projects, businesses and other actors in the impact and climate finance domains in Sub-Saharan Africa, Latin America, and the Caribbean to raise new capital and support business growth..</p>




</div>

</div>




<p className='tracking-tighter text-8xl text-black mt-20 '>Services</p>


<hr className='border-black mt-7'/>

<div className='grid grid-cols-3 py-12'>

    <div className='col-span-1 grid justify-center '>
        <img className='h-80 w-80 rounded-full object-cover  hover:scale-125' src={asset} alt=""  />
        <p className='tracking-tighter text-2xl text-center'>Asset Management</p>
    </div>


    <div className='col-span-1 grid justify-center '>
        <img className='h-80 w-80 rounded-full object-cover  hover:scale-125' src={cap} alt=""  />
        <p className='tracking-tighter text-2xl text-center'>Capital Raising</p>
    </div>


    <div className='col-span-1 grid justify-center '>
        <img className='h-80 w-80 rounded-full object-cover  hover:scale-125' src={advisory} alt=""  />
        <p className='tracking-tighter text-2xl text-center'>Advisory Services</p>
    </div>


</div>




</div>

</div>






<div className='bg-blue-700 '>

    <div className='mx-12'>

        <h2 className='text-7xl tracking-tighter text-end pt-48 text-amber-50 '>To get passive profit, all<br/> you need to do is to follow<br/> simple instructions.</h2>
      
       <hr className='border-white my-9'/>

 <div className='grid grid-cols-5 gap-4'>
       
      <div className='col-span-2'>
      <p className='tracking-tighter text-8xl text-amber-50'>01</p>
      </div>
      
      <div className='col-span-1'>
      <p className='tracking-tighter text-white text-3xl'>Registering and<br/> opening an account</p>
      </div>

      <div className='col-span-2'>
      <p className='tracking-tighter text-white text-xl'>You independently register an account with us, which will remain actual during the period of your inquiry</p>
      </div>
 </div>








 <hr className='border-white my-20'/>

<div className='grid grid-cols-5 gap-4'>
      
     <div className='col-span-2'>
     <p className='tracking-tighter text-8xl text-amber-50'>02</p>
     </div>
     
     <div className='col-span-1'>
     <p className='tracking-tighter text-white text-3xl'>Verification and depositing<br/> of your trading account</p>
     </div>

     <div className='col-span-2'>
     <p className='tracking-tighter text-white text-xl'>You pass the verification, and then you deposit your trading account with the sum, which is convenient to you</p>
     </div>
</div>







<hr className='border-white my-20'/>

<div className='grid grid-cols-5 gap-4'>
      
     <div className='col-span-2'>
     <p className='tracking-tighter text-8xl text-amber-50'>03</p>
     </div>
     
     <div className='col-span-1'>
     <p className='tracking-tighter text-white text-3xl'>Transferring the affiliate access</p>
     </div>

     <div className='col-span-2'>
     <p className='tracking-tighter text-white text-xl'>You give affiliate access to the trading account (not to the wallet!). The first trading results will be in 5-15 working days</p>
     </div>
</div>







<hr className='border-white my-20'/>

<div className='grid grid-cols-5 gap-4'>
      
     <div className='col-span-2'>
     <p className='tracking-tighter text-8xl text-amber-50'>04</p>
     </div>
     
     <div className='col-span-1'>
     <p className='tracking-tighter text-white text-3xl'>Withdrawal of profits and payment of commission</p>
     </div>

     <div className='col-span-2'>
     <p className='tracking-tighter text-white text-xl'>After the trades you independently withdraw the money to your wallet. My commission for the service makes 50% from the received profit</p>
     </div>
</div>









<hr className='border-white my-20'/>

<div className='grid grid-cols-5 gap-4'>
      
     <div className='col-span-2'>
     <p className='tracking-tighter text-8xl text-amber-50'>05</p>
     </div>
     
     <div className='col-span-1'>
     <p className='tracking-tighter text-white text-3xl'>Receiving instructions for the next trades</p>
     </div>

     <div className='col-span-2'>
     <p className='tracking-tighter text-white text-xl'>After the withdrawal of profit and payment of my commission, I send you instructions for registration in another trading company</p>
     </div>
</div>



<hr className='border-white mt-56'/>



<div className='grid grid-cols-2  mt-14'>


    <div className='col-span-1'>
        <p className='tracking-tighter text-white text-7xl '>Investment<br/> benefits and guarantees of cooperation</p>


        <button className='border-white border-2 rounded-full p-5 mt-5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 stroke-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</button>

</div>






<div className='col-span-1'>

    <p className='tracking-tighter text-4xl text-white '> Legitimate passive income without complicacy</p>
    
    <p className='text-white tracking-tighter text-lg my-8'>Minimum time and effort required. No advanced payments are required, and all profits made in the trading process are legal and therefore easily withdrawn to your bank account</p>

    <hr className='my-9'/>

    <p className='tracking-tighter text-4xl text-white '>Transparent and reliable cooperation</p>
    
    <p className='text-white tracking-tighter text-lg my-8'>You control your own documents and bank account. I do not have access to your account at the trading company. I only need access to your trading account to trade</p>

    <hr className='my-9'/>

    <p className='tracking-tighter text-4xl text-white '>We work only with trustworthy companies regulated by FCA, ASIC, CySEC, NFA</p>
</div>

</div>







<hr className='border-white mt-56'/>

<p className='tracking-tighter text-white text-7xl mt-14'>Our numbers <br/>speak most for us</p>





<div className='grid grid-cols-4 py-20 gap-4'>


   <button className=' border-2 border-white rounded-full text-white hover:bg-white hover:text-black'>
    <p className='text-4xl tracking-tighter  text-center '>10</p>
    <p className='text-lg tracking-tighter  text-center'>new clients every month</p>
    </button>





    <button className=' border-2 border-white rounded-full text-white hover:bg-white hover:text-black'>
    <p className='text-4xl tracking-tighter  text-center '>5 years</p>
    <p className='text-lg tracking-tighter  text-center'>of successful experience in investing</p>
    </button>


    

   


    <button className='py-28 px-20 border-2 border-white rounded-full text-white hover:bg-white hover:text-black'>
    <p className='text-4xl tracking-tighter  text-center '>$40 000</p>
    <p className='text-lg tracking-tighter  text-center'>total net profit every month</p>
    </button>



    <button className='py-32 px-20 border-2 border-white rounded-full text-white hover:bg-white hover:text-black'>
    <p className='text-4xl tracking-tighter  text-center '>9 countries</p>
    <p className='text-lg tracking-tighter  text-center'>we have multiple branches in 7+ countries</p>
    </button>


</div>





    </div>

</div>



<Footer/>
    </>
  );
}
