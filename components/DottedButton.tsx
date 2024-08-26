import { FaArrowRight } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const DottedButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='ml-4 mb-4 inline-flex items-center justify-center rounded-xl border-2 border-dashed border-black bg-white text-sm font-semibold px-4 py-2 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:rounded-lg hover:shadow-[2px_2px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none dark:border-white dark:bg-black dark:hover:shadow-[2px_2px_0px_white]'>
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Earn Ksh.5000 with us
          </span>
          <FaArrowRight className='ml-2 text-indigo-600' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 rounded-[0.5rem] md:rounded-[15px] border border-indigo-600 bg-[#f2eaff] dark:bg-black shadow-lg'>
        <DropdownMenuItem className='hover:bg-indigo-50 dark:hover:bg-indigo-900'>
          Ksh. 1500 - Websites from 15k-20k
        </DropdownMenuItem>
        <DropdownMenuItem className='hover:bg-indigo-50 dark:hover:bg-indigo-900'>
          Ksh. 5000 - Websites from 25k-50k
        </DropdownMenuItem>
        <DropdownMenuItem className='hover:bg-indigo-50 dark:hover:bg-indigo-900'>
          Ksh. 10,000 - Websites above 50k
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DottedButton;
