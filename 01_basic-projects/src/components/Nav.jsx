import { navLinks } from '../constants'
import { logo } from '../assets'
import { hamburger } from '../assets'

const Nav = () => {
  return (
    <header className="px-4 md:px-3 lg:px-20 xl:px-32 absolute w-full z-10 top-0 left-0 flex items-center justify-between bg-white/30 backdrop-blur-none border-b-2 border-gray-100 shadow-sm">
      {/* this section is for logo(image) and text(PROJECTS) */}
       <div className='flex items-center justify-center sm:gap-3 gap-0'>
       <a href="#"><img src={logo} alt="logo" className='w-16' /></a>
       <h3 className='text-3xl font-bold'>PROJECTS</h3>
       </div>

       <ul className= 'flex items-center gap-7 max-lg:hidden'>
       {
        navLinks.map((link)=>
        <li key={link.label}>
          <a href={link.href} className='font-semibold text-[#0D47A1] text-xl'>
            {link.label}
          </a>
        </li>
        )
       }
       </ul>
       {/* Hidden by default, displayed as block on screens smaller than 'lg', hidden on 'lg' and larger. */}
       <div className='hidden max-lg:block'>
        <img src={hamburger} alt="menu" className='w-[25px] h-[25px]'/>
       </div>
    </header>
)
}

export default Nav