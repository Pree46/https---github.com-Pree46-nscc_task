import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return(
        <div>
            <nav className="flex justify-between p-6 space-x-1 font-inter text-2xl">
            <div className='flex-initial mt-5'>
                    <Link legacyBehavior  href="/">
                        <a className="text-white ml-8 mr-16 underline decoration-[5px] underline-offset-[9.5px] decoration:white ">About Us</a>
                    </Link>
                    <Link  href='' legacyBehavior>
                        <a className="text-white mr-16 cyan">Our Team</a>
                    </Link>
                    <Link href='' legacyBehavior>
                        <a className="text-white mr-16 cyan">Events</a>
                    </Link>
                    <Link href='' legacyBehavior>
                        <a className="text-white mr-16 cyan">Gallery</a>
                    </Link>
                    <Link href='' legacyBehavior>
                        <a className="text-white mr-16 cyan">Contact Us</a>
                    </Link>
            </div>  
                <a href='/'>
                    <Image
                    className="navbarlogo mr-16 items-end space-x-16" 
                    src={'/nscc_logo.png'}
                    width={78}
                    height={78}
                    />
                </a>
            </nav>
        </div>
)
}

export default Navbar;