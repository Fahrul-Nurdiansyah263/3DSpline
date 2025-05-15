import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row alignitems-center justify-between min-h-[calc(90vh-6rem)]'>
        <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                <i className='bx bx-diamond'></i>INTRODUCTION
                </div>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider  my-8'>
                FAHRUL
                <br />
                NURDIANSYAH 
            </h1>

            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] '>
                Seperti perkataan <em>Leonardo da Vinci</em> yaitu <em>"Simplicity is the ultimate sophiscation"</em> yang berarti "Kesederhanaan bukan berarti kekurangan, tapi justru bentuk tertinggi dari kecanggihan dan keanggunan"
                <br />
            </p>

            <div className='h-[100px]'>
                
            </div> 
        </div>

     <Spline className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-screen' scene="https://prod.spline.design/jaqg27kUGq1fJBX0/scene.splinecode" />



    </main>
  )
}

export default Hero
