import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <section className="relative h-screen w-[99%]" id='home'>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/2sMLRLVNsDJcroVg/scene.splinecode" />
      </Suspense>

      <div className='absolute bottom-5 w-full justify-center items-center flex'>
        <div className='shadow-md p-4 flex items-center justify-center bg-[#5f80ea] rounded-3xl cursor-pointer'>
          <IoAtCircleOutline className='text-md text-[#fff]'></IoAtCircleOutline>
          <p className='text-md text-[#fff]'>ayushtiwari.co</p>
        </div>
      </div>
    </section>
  );
}
