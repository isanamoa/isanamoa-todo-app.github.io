import NewTodo from "./NewTodo";
import {BsSunFill, BsMoonFill} from "react-icons/bs";
const Header = ({mode, modeButton}) => {
  return (
    <header className='text-white bg-mobileBg md:bg-desktopBg bg-no-repeat bg-cover pt-10 h-40'>
      <div className="flex justify-between items-center md:w-1/2 md:mx-auto px-4">
        <span className="text-3xl font-semibold tracking-[6px]">TODO</span>
        <button onClick={()=>modeButton()} className="text-3xl">
          {
              mode ? <BsSunFill title="Enter day mode" className="h-6 w-6 pt-1" /> : <BsMoonFill title="Enter dark mode" className="h-6 w-6 pt-1" />
          }
        </button>
      </div>
      <div className="md:w-1/2 md:mx-auto mt-14">
        <NewTodo />
      </div>
    </header>
  )
}

export default Header
