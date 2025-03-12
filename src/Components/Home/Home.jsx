import home_landing from '../../../public/home_landing.webp' 

const Home = () => {
  return (
    <div className="h-auto py-8">
    <div className="h-screen py-24 relative bg-cover " style={{backgroundImage: `url(${home_landing})` }}  >
      <div className='absolute inset-0 bg-[#00000081]'></div>
      <div className='relative text-center text-white'>
      <h3 className='text-7xl pt-36 px-[28%]'>Welcome to the <span className='text-[#e7b727]'> Rising Star Acadmey</span></h3>
      <p className='pt-12 text-2xl px-[30%] '>We are dedicated to providing a dynamic learning environment for children.</p>
       <div className='flex justify-center gap-32 mt-8'>
        <button className='border border-[#EACE77] text-[#EACE77] text-xl p-3 rounded-xl bg-black hover:text-black hover:bg-[#EACE77] hover:border-black'><a href="">Learn More</a></button>
        <button className='border border-black text-black text-xl p-3 rounded-xl bg-[#EACE77] hover:text-[#EACE77] hover:bg-black hover:border-[#EACE77]'><a href="">Join Now</a></button>
       </div>
      </div>
    </div>
    <div>
      <div>
        <i></i>
        <h3>Who We Are</h3>
      </div>
      <div>
        <i></i>
        <h3>Our Mission</h3>
      </div>
      <div>
        <i></i>
        <h3>Our Vision</h3>
      </div>
    </div>
    </div>
  )
}

export default Home
