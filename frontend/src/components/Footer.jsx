
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className='w-full h-auto pt-5 pb-7 bg-gray-200 mt-5 rounded-sm'>
        <div className='w-full md:h-[80%] md:flex md:justify-between md:items-center block h-auto p-4 bg-gray-200'>
          <div className='md:w-[25%] md:h-[100%] md:flex md:justify-center md:items-center w-[95%]'>
            <div className='md:w-[95%] md:h-[95%] md:flex md:justify-center md:items-center'>
              <div className='md:w-[90%]'>
                <h1 className='text-2xl font-semibold md:mb-2.5 mb-2'><i className="ri-magic-fill"></i>Magicon</h1>
              <p className='text-[15px] text-black'>Our mission is to celebrate the spirit of imagination — turning dreams into adventures and every visit into a world of wonder.</p>
              </div>
            </div>
          </div>
          <div className='md:w-[10%] md:h-[100%] w-[90%]'>
            <div className='w-[95%] h-[95%] md:flex md:justify-center md:items-center'>
              <div className='w-[90%]'>
                <h1 className='text-2xl font-semibold mb-2.5 md:mt-0 mt-2'>About</h1>
              <p className='text-[15px] text-black mb-1.5 hover:underline underline-offset-1'>About Us</p>
              <p className='text-[15px] text-black mb-1.5 hover:underline underline-offset-1'>Blog</p>
              <p className='text-[15px] text-black hover:scale-101 hover:underline underline-offset-1'>Join the Crew</p>
              </div>
            </div>
          </div>
          <div className='md:w-[10%] md:h-[100%] w-[90%]'>
            <div className='w-[95%] h-[95%] md:flex md:justify-center md:items-center'>
              <div className='sm:w-[100%] '>
                <h1 className='text-2xl font-semibold mb-2.5 md:mt-0 mt-2'>Support</h1>
              <p className='text-[15px] text-black mb-1.5 hover:scale-101 hover:underline underline-offset-1'>Contact</p>
              <p className='text-[15px] text-black mb-1.5 hover:scale-101 hover:underline underline-offset-1'>Collaborate</p>
              <p className='text-[15px] text-black hover:underline underline-offset-1'>FAQ</p>
              </div>
            </div>
          </div>
          <div className='md:w-[25%] md:h-[100%] w-[90%]'>
            <div className='w-[95%] h-[95%] md:flex md:justify-center md:items-center'>
              <div className='sm:w-[100%]'>
                <h1 className='text-2xl font-semibold mb-2.5 md:mt-0 mt-2'>Get Updates</h1>
              <p className='text-[15px] text-black'>Stay updated on the newest Disneyland thrills and event updates.</p>
              <p className='text-3xl mt-2'>
                <NavLink to="https://www.instagram.com/"><i className="ri-instagram-fill"></i></NavLink>
                <NavLink to="https://x.com/"><span className='ml-4'><i className="ri-twitter-x-fill"></i></span></NavLink>
                <NavLink to="https://www.facebook.com/"><span className='ml-4'><i className="ri-facebook-circle-fill"></i></span></NavLink>
                <NavLink to="https://discord.com/login"><span className='ml-4'><i className="ri-discord-fill"></i></span></NavLink>
                <NavLink to="https://www.linkedin.com/in/bhabana-agrawal-6a6313358/"><span className='ml-4'><i className="ri-linkedin-fill"></i></span></NavLink></p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex md:justify-center md:items-center w-full md:h-[20%] h-auto'>
          <div className='md:flex md:justify-between md:items-center md:w-[97%] md:p-0 block bg-gray-200 p-4 pt-0'>
          <div className=' text-[15px]'>&copy;2025 Magicon. All rights reserved.</div>
          <div className='flex md:gap-5 md:flex-row text-[15px] flex-col-reverse mt-1 md:mt-0'>
            <div className="cursor:pointer hover:scale-101 md:hover:underline underline-offset-1 mt-1 md:mt-0">Privacy Policy</div>
            <div className="cursor:pointer hover:scale-101 md:hover:underline underline-offset-1">Terms of Service</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
