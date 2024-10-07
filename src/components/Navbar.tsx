import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import ThemeSwitch from "./ThemeSwitch";


function Navbar() {
    return (
      <div className="fixed top-0 z-10 flex justify-between h-10 w-screen text-white font-medium">
          <div className="flex w-full justify-between sm:justify-normal sm:w-auto h-full items-center ml-1 sm:ml-5 gap-5 text-amber-500">
              <div className="text-sm sm:text-large">
                Rabee <span className="text-white">Hasan</span>
              </div>
              <ThemeSwitch/>
          </div>
          
          <div className="mr-10 hidden sm:block">
              <ul className="flex h-full items-center gap-8">
                  <li className="hover:text-red-400 ease-linear duration-100 cursor-pointer"><FaSquareFacebook size={25}/></li>
                  <li className="hover:text-red-400 ease-linear duration-100 cursor-pointer"><FaLinkedin size={25}/></li>
                  <li className="hover:text-red-400 ease-linear duration-100 cursor-pointer"><FaGithub size={25}/></li> 
              </ul>
          </div>
      </div>
    )
  }
  
  export default Navbar