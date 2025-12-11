import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import { FreeMode,Pagination,Navigation } from 'swiper/modules' 
import { CardData, OpenBlog, ServiceData } from '../constants'
import mus_fest from '../assets/mus_fest.mp4'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';


const Home = () => {
  const navigate = useNavigate()
  const [data,setData] = useState([])
  const sum = data.length + OpenBlog.length + 4
  useEffect(()=>{
    loadBlogsData()
  },[])
  const loadBlogsData = async () =>{
    const response = await axios.get("https://magicon.onrender.com/blogs")
    if(response.status === 200){
      setData(response.data)
    }else{
      toast.error("Something went wrong")
    }
  }

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure that you wanted to delete that blog ?")){
      const response = await axios.delete(`https://magicon.onrender.com/blogs/${id}`)
    if(response.status === 200){
      toast.success("Blog deleted successfully")
      loadBlogsData()
    }else{
      toast.error("Something went wrong");
    }
    }
  }
  return (
 <div>
      <Navbar/>
      <div className="bg-[linear-gradient(rgba(10,25,47,0.1),rgba(0,0,70,0.4)),url('https://i.pinimg.com/736x/cf/69/76/cf6976d564527efd2ef908de11e6ed8e.jpg')]  w-full md:h-auto h-[100vh] bg-no-repeat bg-cover z-0  bg-center bg-gradient-to-b from-transparent to-black/80">
        <div className='md:pt-73 md:translate-y-[0%] translate-y-[55%] text-center  text-white'>
          <span className='text-[20px] bg-white/20 px-4 py-2 rounded-full'><i className="ri-shining-fill font-sans"></i>Relive the Magic</span>
          <h1 className='md:text-[3.1rem] md:m-5 md:mb-0 text-[1.5rem] mt-3 ml-5 mr-5 font-extrabold '>Because Some Magic Never Fades</h1>
          <p className='md:text-[1rem] text-sm text-shadow-indigo-200 md:ml-60 ml-7 mr-7 md:mr-60 mt-3 font-semibold md:mb-60'>Step into a world of wonder, where every story sparkles and every moment feels like magic.
Discover the heart of Disneyland — the happiest place on Earth.</p>

          <div className='w-[100%] h-90'>
            <div className='bg-transparent backdrop-blur-md h-[100%] w-[93%] md:translate-x-[7.5%] md:-translate-y-[12%] hidden md:block'>
              <div className='flex justify-center items-center w-[100%] h-[100%]'>
                <div className="lg-w-[80%] w-[89%] text-left p-auto pl-6 pr-6">
                <h1 className='text-5xl font-semibold mb-5'>Ride the Unexpected</h1>
                <p className='mb-5'>Experience the wonder of Disneyland — where imagination, laughter, and dreams unite to create the happiest stories on Earth.</p>
                <p>Join the dreamers and adventurers. Explore enchanting tales, park secrets, guides, and magical moments that make every visit unforgettable.</p>
              </div>
              <Swiper
                style={{'--swiper-pagination-color':'#ff4500','--swiper-pagination-bullet-inactive-color':'#d1d5db','--swiper-pagination-bullet-inactive-opacity':'0.5'}}
                breakpoints={{
                  400:{
                    slidesPerView:2,
                    spaceBetween:10
                  },
                  768:{
                    slidesPerView:3,
                    spaceBetween:10
                  },
                  1370:{
                    slidesPerView:3,
                    spaceBetween:0
                  }
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules = {[FreeMode,Pagination]}
              >
                {ServiceData.map((item)=>(
                  <SwiperSlide key={item.title}>
                    <div className='flex flex-col group relative shadow-sm text-white rounded-xl py-8 h-[250px] w-[215px] lg:h-[300px] lg:w-[250px] '>
                      <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:`url(${item.backgroundImage})`}}/>
                      <div className='absolute inset-0 bg-black opacity-30 font-serif group-hover:opacity-65'></div>
                      <div className='relative flex flex-col gap-1 justify-items-start'>
                        <h1 className='text-[14px] lg:text-xl pl-3 pt-0 text-left'>{item.title}</h1>
                        <p className='lg:text-[12px]  pl-3 pr-3 text-left'>{item.content}</p>
                      </div>
                    </div>
                  </SwiperSlide>               
                ))}
              </Swiper>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full md:h-auto md:py-10 py-0 pb-5 flex justify-center items-center">
  <section id='reach' className="w-[95%] flex flex-col items-center">
    <h2 className="md:text-5xl text-4xl italic text-black p-9 text-center">
      The Spirit of Endless Wonder
    </h2>
    <Swiper
    style={{'--swiper-navigation-color':'#ff4500','--swiper-navigation-size':'25px','--swiper-navigation-sides-offset':'-5px',}}
      slidesPerView={4}
      spaceBetween={20}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="w-full"
      breakpoints={{
        250: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      
    >
      {CardData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className='w-full h-[100%] flex justify-center items-center'>
            <div className=" w-[400px] md:h-auto h-auto md:mb-5 mb-5" onClick={()=>navigate(`/Open_Blog/${item.id}`)}>
            <img
              className="w-full h-[400px] object-cover rounded-t-full hover:opacity-70"
              src={item.image}
              alt={item.title}
            />
            <div className="p-1 h-auto">
              <p className="mt-1 font-semibold text-xs text-gray-500">
                {item.date} <span> &#183; {item.readTime}</span>
              </p>
              <h1 className="mt-1 font-semibold font-sans">
                {item.title}
              </h1>
              <p className="mt-1 text-sm text-gray-500 font-semibold line-clamp-2">
                {item.subheading.slice(0, 70) + "..."}
              </p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        
      ))}
    </Swiper>
  </section>
      </div>
 <div className="w-full bg-gray-200 py-5 flex flex-col md:flex-row md:justify-evenly md:items-stretch gap-6">
  <div className="md:w-[22%] w-full flex flex-col justify-between items-center bg-gray-200 overflow-hidden">
    <div className="text-center py-6">
      <h1 className="text-7xl sm:text-8xl font-semibold leading-none">HALLO</h1>
      <h1 className="text-7xl sm:text-8xl font-semibold leading-none">WEEN</h1>
    </div>
    <img
      className="hidden md:block w-full h-[60%] object-cover"
      src="https://i.pinimg.com/736x/e3/74/b3/e374b3678e82b7f65fbf7caeedaa1875.jpg"
      alt="Halloween poster"
    />
  </div>
  <div className="md:w-[25%] w-full flex justify-center items-center bg-gray-200 overflow-hidden">
    <video
      src={mus_fest}
      className="w-[90%] md:w-full h-[100%] object-cover"
      autoPlay
      loop
      muted
    ></video>
  </div>
  <div id="one" className="md:w-[45%] w-full flex flex-col justify-between bg-gray-200 overflow-hidden">
    <div className="flex md:flex-row flex-col justify-between md:h-[70%] h-auto">
      <div className="md:w-1/2 w-full flex flex-col justify-around items-center">
        {[
          {
            id: 1,
            title:
              "Get Ready for a Spooktacular Disneyland Halloween — Where Ghouls, Ghosts, and Pumpkin Magic Await!",
          },
          {
            id: 2,
            title:
              "Spooky Snacks and Sweet Surprises — Disneyland’s Halloween Treats You Can’t Miss!",
          },
          {
            id: 3,
            title:
              "Inside the Ghosthouse — When Disneyland’s Haunted Halls Come Alive After Dark",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="p-4 cursor-pointer transition"
            onClick={() => navigate(`/post/${item.id}#one`)}
          >
            <div className='w-full h-[1px] bg-gray-500'></div>
            <div className=' hover:bg-gray-300 md-p-3 p-4'>
              <span className="font-semibold text-gray-500">HALLOWEEN</span>
            <span className="pl-3 text-gray-500">OCT 31, 2025</span>
            <h1 className="font-semibold text-sm">{item.title}</h1>
            </div>
            <div className='w-full h-[1px] bg-gray-500'></div>
          </div>
          
        ))}
      </div>
      <div className="md:w-[45%] hidden md:block">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/1200x/e0/88/9a/e0889a804a952f7b501d2319c6ccf170.jpg"
          alt="Haunted Disneyland"
        />
      </div>
    </div>
    <div
      className="md:p-4 pl-8 pr-8 pt-4 pb-4 cursor-pointer hover:bg-gray-100 transition  md:h-[30%] flex flex-col justify-center"
      onClick={() => navigate("/post/4#one")}
    >
      <div>
        <span className="font-semibold text-gray-500">HALLOWEEN</span>
        <span className="pl-3 text-gray-500">OCT 31, 2025</span>
        <h1 className="font-bold text-lg sm:text-xl mt-2 leading-tight">
          When the Cartoons Came to Life — Disneyland’s Beautiful Parade of Characters!
        </h1>
        <h2 className="text-[14px] mt-3 text-gray-500">
          <i className="ri-shining-fill"></i> Written by{" "}
          <span className="font-bold text-black">Choti’s Disney Journal</span> — A Dreamer at the Castle Gates
        </h2>
      </div>
    </div>
  </div>
</div>

   <section id="two">
  <div className="w-full flex justify-center items-center bg-white">
    <div className="w-[95%] flex flex-col items-center">
      <div className="text-3xl sm:text-4xl md:text-5xl text-black p-4 font-semibold mt-10 mb-7 text-center">
        LATEST <span className="italic font-light">From The</span> BLOG
      </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 mb-10">
         {!data && (
    <p className="w-100 h-auto flex justify-center align-center">
      Loading...
    </p>
  )}
          {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="w-[90%] sm:w-[280px] md:w-[290px] lg:w-[300px] bg-white shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                className="w-full h-[220px] sm:h-[250px] md:h-[35vh] object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-xs sm:text-sm text-black">
                    {item.date}
                    <span> &#183; {item.readTime}</span>
                  </p>
                  <p
                    onClick={() => handleDelete(item.id)}
                    className="text-black hover:text-blue-600 cursor-pointer text-lg"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </p>
                </div>

                <h1 className="font-semibold font-sans text-base sm:text-lg mt-2 line-clamp-2">
                  {item.title}
                </h1>

                <p className="mt-2 text-sm text-gray-600 leading-snug line-clamp-3">
                  {item.shortDesc.slice(0, 65) + "..."}
                </p>

                <div className="flex justify-center mt-4">
                  <button
                    className="border-2 px-3 py-1 bg-black text-white border-black rounded-sm shadow-sm cursor-pointer transition"
                    onClick={() => navigate(`/Blog_list/${item.id}`)}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</section>

   
<div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-3 md:gap-0 px-2">
  <div className="w-full md:w-[30%] h-auto md:h-[95%] flex flex-col sm:flex-row md:flex-col justify-between items-center gap-3">
    <div className="w-[100%] sm:w-[49.5%] md:w-[98%] h-[50vh] md:h-[49%] rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-xl"
        src="https://cdn-imgix.headout.com/media/images/152af2ab-a63f-44b1-9cb5-a3d0bee4e007-1755577456758-303561.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&ar=14%3A9&crop=faces&fit=crop"
        alt=""
      />
    </div>
    <div className="w-[100%] sm:w-[49.5%] md:w-[98%] h-[50vh] md:h-[49%] rounded-xl overflow-hidden relative bg-black text-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 rounded-xl"
        style={{
          backgroundImage:
            "url(https://cdn-imgix.headout.com/media/images/2d7daf8d-596e-4c7a-a8aa-4de074a9400b-1755578127366-303541.jpg?auto=format&w=828&h=619.1999999999999&q=90&ar=3%3A4&crop=faces%2Ccenter&fit=crop)",
        }}
      ></div>
      <h1 className="relative z-10 flex md:justify-start justify-center md:items-end items-center md:text-start text-center w-full h-full p-4 md:text-4xl text-2xl font-semibold leading-snug">
        Blogs Published
        <br />
        {sum}
      </h1>
    </div>
  </div>
  <div className="w-full md:w-[69%] h-[50vh] md:h-[95%] rounded-xl overflow-hidden relative mb-2 mt-1 md:mb-0 md:mt-0">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95 rounded-xl"
      style={{
        backgroundImage:
          "url(https://cdn-imgix.headout.com/media/images/93089779-61f4-48a3-9c86-cc0b9175edf5-1755577725232-303565.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&ar=14%3A9&crop=faces&fit=crop)",
      }}
    ></div>
    <div className="relative z-10 w-full h-full flex justify-center items-center">
      <h1 className="text-center font-semibold md:text-4xl text-2xl p-6 md:p-12 text-black drop-shadow-lg">
        Beyond the rides, crafting memories that last a lifetime
      </h1>
    </div>
  </div>
</div>


      <Footer/>
    </div>
  )
}

export default Home

