import "@fontsource/quantico";
import Image from 'next/image'; 

const About = () => {
    return(
        <div className="w-full mt-36 flex flex-col justify-center items-center">
          <Image
              className="z-10" 
              src={'/nscc_logo.png'}
              width={290}
              height={290}
          />
        <div className="intro text-white text-6xl font-normal leading-normal">
          Newton School Coding Club
        </div>
        <div className="intro cyan text-5xl font-normal leading-normal">
          SRMIST
        </div>
        <div className="intro cyan text-4xl font-normal leading-normal">
          Coder's Vertex
        </div>

        <div className="max-w-md px-28 my-36 mx-auto flex justify-center text-white text-4xl text-center border border-4 border-[#6CE5E5] rounded-full py-3">
            <div>About </div>
            <div className="text-[#27D2D2] mx-2"> us</div>
        </div>
        <div className='w-[1055px] h-[568px] bg-[#525252] flex-none rounded-[50px]'>
        </div>
        </div>

    )}


export default About;