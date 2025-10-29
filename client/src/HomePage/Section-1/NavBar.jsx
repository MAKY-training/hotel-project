import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import DropDownLine from './DropDownLine';
import Button from '../../Reusable/Button';
export default function NavBar() {
    
    return (
        
            <nav className='w-full h-24 flex justify-between items-center p-4 px-24 shadow-sm rounded-b-3xl backdrop-blur-md bg-white/50 '>
                <h2 className="text-[#172259] font-extrabold text-5xl font-montserrat">LOGO</h2>
                <div className='flex justify-betweem'>
                    <Button className='w-52 h-14 bg-[#20B2AA] rounded-full font-semibold text-sm text-white font-montserrat hover:bg-[#1ba39c] transition-all'>Become A Host</Button>
                    <button className='w-28 h-14 shadow-md flex justify-between items-center ml-4 p-1 rounded-full '>
                        <div className='flex flex-col justify-between h-5 pl-3' >
                            <DropDownLine/>
                            <DropDownLine/>
                            <DropDownLine/>
                        </div>
                        <FontAwesomeIcon icon={SolidIcons.faUserCircle} color='#C2C6CC'  className='text-4xl ' />
                        
                    </button>
                </div>

            </nav>
        
    );
}