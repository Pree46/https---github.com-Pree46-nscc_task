import Image from "next/image";
import "@fontsource/inter";


const Footer = () => {
    return(

<footer class="z-50  bottom-0 mt-[500px]">
    <div className="flex w-full px-32 flex justify-between bg-[#020202] py-6 rounded-t-[100px] rounded-b-none">
        <div className="flex flex-col justify-evenly items-center gap-8 ">
        <div class="cyan text-3xl mt-14">Contact:</div>
        <div>
            <div class="flex mt-8 mr-4">
            <div className="flex">
                <Image
                src={'/phone.png'}
                width={37.75}
                height={37.75}
                />
                <div className="flex text-white text-3xl ml-2 ">:</div>
            </div>
        </div>
        <div className=" flex text-xl text-white  flex-col ">
                <div className="mt-6">9458896788</div>
                <div>9458896088</div>
                </div>
            </div>
        
        
        <a href="mailto:nscc@gmail.com" className="z-50">
            <div class="flex mt-8">
            <div className="flex">
                <Image
                src={'/mail.png'}
                width={50}
                height={50}
                />
                <div className="flex text-white text-3xl ml-2 ">:</div>
            </div>
        </div>
        <div className=" flex text-xl text-white  flex-col">
                <div className="mt-6">nscc.com</div>
                </div>

        </a>
        </div>
        
        <div className="z-50 ">
        <div class="flex justify-center items-center cyan text-3xl mt-14">Follow us on:</div>
        <div class="flex justify-center items-center flex-col mt-7 ">
            <div class="flex my-5">
                <a href="https://www.instagram.com/nscc_srm">
                <Image
                className="mr-5"
                src="/insta.png"
                width={50}
                height={50}
                />
                </a>
                <a href="https://www.linkedin.com/company/newton-school-coding-club-srmist/mycompany/">
                <Image
                className="mx-5"
                src="/Linkedin.svg"
                width={50}
                height={50}
                />
                </a>
                <a href="https://twitter.com/nsccsrm?lang=en">
                <Image
                className="mx-5"
                src="/twitter.png"
                width={50}
                height={50}
                />
                </a>
            </div>
            <Image 
                className="mt-10"
                src={"/footerDev.614c5c4e.svg"} 
                width={350}
                height={120}/>


        </div>
    </div>

    <div class="z-50">
        <div class="cyan text-3xl mt-14">Navigate </div>
        <div class="flex flex-col text-xl text-white mt-7">
            <a class="my-1" href="/">About us</a>
            <a class="my-1" href="/">Events</a>
            <a class="my-1" href="/">Gallery</a>
            <a class="my-1" href="/">Contact us</a>
            </div>
        </div>
    </div>
    
</footer>

    )}

export default Footer;