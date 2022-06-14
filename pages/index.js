import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TechnoThoscope</title>
        <meta name="description" content="Electronic Stethoscope by TechnoThoscope" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-sans text-gray-800 bg-gray-100'>
        <div className='header w-full min-h-screen flex flex-col justify-between'>
          <nav className='flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:bg-transparent shadow sm:shadow-none'> 
            <div className='w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center'>
              <img src="/capstoneLogo.svg" alt="TechnoThoscope Logo" className='h-40 w-screen px-6' />
            </div>
          </nav>

          <div className='flex flex-col justify-center h-full py-12'>
            <div className='self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0'>
              <div className='w-full text-center sm:text-left sm:w-1/2 pb-12 sm:px-8'>
                <h2 className='font-bold tracking-widest text-4xl font-allura'>
                  the beat of the...
                  <span className='overflow-hidden h-10 block font-light text-browngray text-2xl my-6'>
                    <ul className='list-none animate-wiggle2'>
                      <li className='leading-10 m-0 xl:pl-3 font-allura text-indigo-600 text-3xl'>technology</li>
                      <li className='leading-10 m-0 xl:pl-3 font-allura text-indigo-600 text-3xl'>data</li>
                      <li className='leading-10 m-0 xl:pl-3 font-allura text-indigo-600 text-3xl'>life</li>
                      <li className='leading-10 m-0 xl:pl-3 font-allura text-indigo-600 text-3xl'>electronic</li>
                      <li className='leading-10 m-0 xl:pl-3 font-allura text-indigo-600 text-3xl'>technology</li>
                      <li className='leading-10 m-0 xl:pl-3 font-allura text-indigo-600 text-3xl'>data</li>
                      <li className='leading-10 m-0 xl:pl-3 font-allura text-indigo-600 text-3xl'>life</li>
                    </ul>
                  </span>
                  <p className='font-bold tracking-widest text-4xl '>...for you!</p>
                </h2>
              </div>
              <div className='w-full sm:w-1/2'>
                <img src="/undraw_doctor_kw-5-l.svg" alt="undraw_doctor"></img>
              </div>

            </div>

          </div>
          <div className='flex flex-row w-full justify-center pb-12'>
            <a className='px-10 py-2 text-gray-200 bg-indigo-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red' href='#about'>
              More Information
            </a>

          </div>

        </div>
        <div id='about' className='w-full min-h-screen flex flex-col justify-center items-center py-12'>
          <div className='self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0'>
            <h2 className='font-bold tracking-wider text-gray-800 text-4xl mb-4'>Next Level Stethoscope</h2>
            <div className='font-light text-black text-xl'>
              <p>A dramatically more functional, lightweight stethoscope. Developable and sustainable design. Witness the power of digital data with the electronic stethoscope.
              </p>
            </div>
            <video autoPlay loop muted className="inset-0 object-cover w-screen xl:h-auto py-12">
              <source
                src="/capstoneanimation1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className='flex flex-row w-full justify-center py-12'>
            <a className='px-10 py-2 text-gray-200 bg-indigo-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red' href='#features'>
              See How it Works
            </a>
          </div>

        </div>
        <div id='features' className='w-full min-h-screen flex flex-col justify-center items-center bg-indigo-900 py-12'>
          <div className='self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0'>
            <h2 className='tracking-wide text-blue-200 font-bold text-4xl mb-4'>Stethoscope of Today's Technology</h2>
            <div className='font-light text-gray-200 text-xl mb-6'>
              <p>We achieved almost instantaneous data transfer in our product, which we strengthened with the wifi module. Lets simply explain how things works.
              </p>
            </div>

          </div>
          <div className='self-center w-full xl:w-4/5 flex flex-col sm:flex-row flex-wrap px-4 xl:px:0'>
            <div className='w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12'>
              <div className='w-1/3 xl:w-1/4'>
                <img src="/circuit-svgrepo-com.svg" alt="AWE.SOME Feature Two" className="w-16 block sm:mx-auto text-white" />
              </div>
              <div className='w-2/3 xl:w-3/4'>
                <h3 className='tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2'>Circuit with a Wifi Module</h3>
                <div className='font-light text-gray-200 text-lg'>
                  <p>We send the voice data we receive with the I2S protocol to the server with the tcp / ip protocol.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12'>
              <div className='w-1/3 xl:w-1/4'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-16" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className='w-2/3 xl:w-3/4'>
                <h3 className='tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2'>Server</h3>
                <div className='font-light text-gray-200 text-lg'><p>With the TCP/IP protocol, we transmit the data to the mobile application almost instantly.</p></div>
              </div>
            </div>
            <div className='w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12'>
              <div className='w-1/3 xl:w-1/4'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-16" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className='w-2/3 xl:w-3/4'>
                <h3 className='tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2'>Mobile Application</h3>
                <div className='font-light text-gray-200 text-lg'><p>We create a wav file with the received data by applying noise cancellation and sound amplification algorithms.</p></div>
              </div>
            </div>
            
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
          <Image src="/capstoneLogo.svg" alt="TechnoThoscope Logo" width={144} height={32} />
          </span>
      </footer>
    </div>
  )
}
