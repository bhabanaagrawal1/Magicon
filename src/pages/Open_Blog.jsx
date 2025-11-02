import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { OpenBlog } from '../constants'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Open_Blog = () => {
    const {id} = useParams()
    const [data,setData]= useState(null)
    const fetchBlogData = async()=>{
       const data =  OpenBlog.find(item=>item.id === id)
       setData(data)
    }
    useEffect(()=>{
        fetchBlogData()
    },[])
  return data ? (
    <>
    <Navbar/>
      <div className='w-full md:h-[75vh] h-[80vh] bg-gray-200 flex justify-center items-center md:pt-20 pt-10 object-cover bg-no-repeat bg-cover' style={{backgroundImage:`url(${data.image})`,backgroundPosition:`${data.bgposition}`}}>
        <div className='w-[60%] h-[95%] flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='md:text-6xl font-bold text-[35px]'>{data.title}</h1>
            <p className=' mt-3 font-semibold md:text-[18px] text-[15px] italic font-sans'>{data.subheading}</p>
            <p className=' md:text-[18px] text-[15px] font-semibold mt-1 font-sans mb-3'>{data.info}</p>
            <Link to='/Home#reach'><span className='outline-0 pt-2 pr-9 pb-3 pl-9 text-xl text-white bg-black text-center shadow-lg shadow-black-800/70'>Back To Home</span></Link>
            </div>
        </div>
    </div>
    <div className='w-full md:h-[30vh] h-auto flex justify-center items-center'>
        <div className='md:w-[80%] md:h-[90%] flex md:justify-evenly justify-center items-center md:flex-row h-auto flex-col gap-5 mt-5 mb-10 '>
            <div className='md:w-[25%] w-[90%] h-[80%] bg-white rounded-xl shadow-md flex md:justify-center md:items-center md:p-2 p-6 hover:scale-101 hover:shadow-lg'>
                <div>
                    <h1 className='text-[17px] font-semibold relative'>One Day Ticket</h1>
                    <p className='text-[14px] text-gray-500 relative'>Step into the wonder for a day of rides, laughter, and magical memories.</p>
                </div>
            </div>
            <div className='md:w-[25%] w-[90%] h-[80%] bg-white rounded-xl shadow-md flex justify-center items-center md:p-2 p-6 hover:scale-101 hover:shadow-lg'>
                <div>
                    <h1 className='text-[17px] font-semibold relative'>Full Weekend Pass</h1>
                    <p className='text-[14px] text-gray-500 relative'>Immerse yourself in adventure, parades, and attractions across the park.</p>
                </div>
            </div>
            <div className='md:w-[25%] w-[90%] h-[80%] bg-white rounded-xl shadow-md flex justify-center items-center md:p-2 p-6 hover:scale-101 hover:shadow-lg'>
                <div>
                    <h1 className='text-[17px] font-semibold relative'>VIP Experience</h1>
                    <p className='text-[14px] text-gray-500 relative'>Enjoy exclusive access, magic, and a premium Disneyland journey.</p>
                </div>
            </div>
        </div>
    </div>
    {/* <div className='w-full md:h-[90vh] flex justify-center items-center'>
        <div className='w-[95%] md:h-[90%] flex flex-col items-center'>
            <h1 className='text-4xl mb-5 font-semibold'>DISNEY STARS</h1>
        <div className='md:w-[80%] md:h-[90%] flex md:justify-evenly md:items-center md:flex-row flex-col w-[90%]'>
            <div className='md:w-[30%] h-[90%]'>
                <p className='w-[100%] md:h-[15%] md:p-3 p-2 flex justify-center items-center'>
                    <div className='w-[90%] h-[100%] text-center'>{data.mus_1_info}</div>
                </p>
                <img src={data.mus_1_image} className='object-cover w-[100%] md:h-[85%] h-[400px]' alt="" />
                <h1 className='text-3xl lg:-translate-y-75 md:-translate-y-70 -translate-y-80 rotate-90 -translate-x-[46%]'>{data.mus_1_name}</h1>
            </div>
            <div className='md:w-[30%] h-[90%]'>
                <p className='w-[100%] md:h-[15%] md:p-3 p-2 flex justify-center items-center'>
                    <div className='w-[90%] h-[100%] text-center'>{data.mus_2_info}</div>
                </p>
                <img src={data.mus_2_image} className='object-cover w-[100%] md:h-[85%] h-[400px]' alt="" />
                <h1 className='text-3xl lg:-translate-y-75  md:-translate-y-70 -translate-y-80 rotate-90 -translate-x-[46%]'>{data.mus_2_name}</h1>
            </div>
            <div className='md:w-[30%] h-[90%]'>
                <p className='w-[100%] h-[15%] md:p-3 p-2 flex justify-center items-center'>
                    <div className='w-[90%] h-[100%] text-center'>{data.mus_3_info}</div>
                </p>
                <img src={data.mus_3_image} className='object-cover w-[100%] md:h-[85%] h-[400px]' alt="" />
                <h1 className='text-3xl lg:-translate-y-75  md:-translate-y-70 -translate-y-80 rotate-90 -translate-x-[46%]'>{data.mus_3_name}</h1>
            </div>
        </div>
        </div>
    </div> */}
    <div className="w-full md:h-[90vh] flex justify-center items-center">
  <div className="w-[95%] md:h-[90%] flex flex-col items-center">
    <h1 className="text-4xl mb-5 font-semibold">DISNEY STARS</h1>

    <div className="md:w-[80%] md:h-[90%] flex md:justify-evenly md:items-center md:flex-row flex-col w-[90%]">
      
      {/* Card 1 */}
      <div className="relative md:w-[30%] h-[90%] flex flex-col items-center pt-10 md:pt-0">
        <p className="w-full md:h-[15%] md:p-3 p-2 flex justify-center items-center">
          <div className="w-[90%] text-center">{data.mus_1_info}</div>
        </p>
        <div className="relative w-full md:h-[85%] h-[400px]">
          <img
            src={data.mus_1_image}
            className="object-cover w-full h-full"
            alt=""
          />
          <h1 className="absolute left-[2%] top-[35%] -translate-y-1/2 -rotate-90 origin-left text-2xl font-semibold">
            {data.mus_1_name}
          </h1>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative md:w-[30%] h-[90%] flex flex-col items-center pt-10 md:pt-0">
        <p className="w-full md:h-[15%] md:p-3 p-2 flex justify-center items-center">
          <div className="w-[90%] text-center">{data.mus_2_info}</div>
        </p>
        <div className="relative w-full md:h-[85%] h-[400px]">
          <img
            src={data.mus_2_image}
            className="object-cover w-full h-full"
            alt=""
          />
          <h1 className="absolute left-[2%] top-[35%] -translate-y-1/2 -rotate-90 origin-left text-2xl font-semibold">
            {data.mus_2_name}
          </h1>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative md:w-[30%] h-[90%] flex flex-col items-center pt-10 md:pt-0">
        <p className="w-full md:h-[15%] md:p-3 p-2 flex justify-center items-center">
          <div className="w-[90%] text-center">{data.mus_3_info}</div>
        </p>
        <div className="relative w-full md:h-[85%] h-[400px]">
          <img
            src={data.mus_3_image}
            className="object-cover w-full h-full"
            alt=""
          />
          <h1 className="absolute left-[2%] top-[35%] -translate-y-1/2 -rotate-90 origin-left text-2xl font-semibold">
            {data.mus_3_name}
          </h1>
        </div>
      </div>

    </div>
  </div>
</div>

  
    <div className='w-[100%] flex justify-center items-center'>
        <div className='w-full flex justify-center items-center'>
        <div className='md:w-[70%] w-[85%] flex flex-col font-sans addCss mb-7' dangerouslySetInnerHTML={{__html: data.description}}>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  ) : <div className='flex justify-center items-center w-full h-[58vh] text-3xl pt-25'>Loading...</div>
}

export default Open_Blog 
