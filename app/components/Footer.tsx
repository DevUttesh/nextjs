import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className=' bg-gray-800 h-max m-auto' >
      <div className='container m-auto flex gap-2 flex-col sm:flex-row p-5 sm:p-12 ' >

        <div className='flex flex-1 flex-col gap-4' >
          <h1 className='text-xl  text-white ' >COMPANY</h1>
          <p className='text-gray-400' >
            A108 Adam Street<br />
            New York, NY 535022;<br />
            United States
          </p>
          <div className='text-gray-400' >
            <p><span className='font-bold' >Phone:</span>+1 5589 55488 55</p>
            <p><span className='font-bold' >Email:</span>info@example.com</p>
          </div>
        </div>

        <div className='flex-1 flex flex-col gap-2' >
          <h1 className='font-bold text-lg text-white' >Useful Links</h1>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Home</Link>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> About us</Link>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Services</Link>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Terms of service</Link>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Privacy policy</Link>
        </div>

        <div className='flex-1 flex flex-col gap-2' >
          <h1 className='font-bold text-lg text-white' >Our Services</h1>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Web Design</Link>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Web Development</Link>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Product Management</Link>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Marketing</Link>
          <Link href={'/'} className='text-gray-400' > <span className='text-lime-500 font-extrabold' >&gt;</span> Graphic Design</Link>
        </div>

        <div className='flex sm:w-1/3 flex-col gap-5 ' >
          <h1 className='font-bold text-lg text-white' >Join Our Newsletter</h1>
          <p className='text-gray-400' >Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <div className='relative' >
            <input className='w-full focus:outline-none p-3 rounded-md ' type="email" placeholder='Email' />
            <button className='absolute top-0 bottom-0 right-0 bg-lime-500 rounded-r-md text-white px-5 ' >Subscribe</button>
          </div>
        </div>

      </div>

      <div className=' bg-gray-950' >

        <div className='container m-auto sm:py-5 sm:px-12 p-5 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center' >

          <p className='text-gray-50' >© Copyright <b>Company</b>. All Rights Reserved<br />
            Designed by <span className='text-lime-500' >Suthar Uttesh</span> </p>
          <div className='flex gap-3' >
            <Link href={'/'} className='bg-gray-700 hover:bg-lime-500 transition ease-in-out duration-500 p-3 rounded-md flex' >
              <svg className="w-3 h-3  fill-gray-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
              </svg>
            </Link>
            <Link href={'/'} className='bg-gray-700 hover:bg-lime-500 transition ease-in-out duration-500 p-3 rounded-md flex' >
              <svg className="w-3 h-3  fill-gray-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 19">
                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
              </svg>
            </Link>
            <Link href={'/'} className='bg-gray-700 hover:bg-lime-500 transition ease-in-out duration-500 p-3 rounded-md flex' >
              <svg className="w-3 h-3  fill-gray-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14">
                <path d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" />
              </svg>
            </Link>
            <Link href={'/'} className='bg-gray-700 hover:bg-lime-500 transition ease-in-out duration-500 p-3 rounded-md flex' >
              <svg className="w-3 h-3  fill-gray-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                <path d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>

            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer