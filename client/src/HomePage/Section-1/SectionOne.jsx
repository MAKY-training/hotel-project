import NavBar from "./NavBar";
import BackgroundImg from "../../../src/assets/licensed-image.jpg";
import Search from "./Search";
export default function SectionOne() {
    return (
        <section className='w-full bg-gradient-to-br from-[#E0F7FA] to-[#F1F8E9] overflow-hidden rounded-3xl  '>

            <NavBar />
            <div className="w-[50%] h-[30rem] mx-auto mt-28 rounded-xl overflow-hidden shadow-lg shadow-gray-300/40">
                <img src={BackgroundImg} alt="Background" className="w-full h-full object-cover"/>
            </div>

            <div className="w-[50%] h-16 mx-auto my-10 rounded-full  flex items-center pl-6 shadow-md bg-white m-2">
                <Search placeholder = {"Place"}/>
                <Search placeholder = {"City"}/>
                <Search placeholder = {"Rooms"}/>
                <button className=" h-full px-10 bg-[#20B2AA] rounded-e-full text-white font-montserrat font-semibold hover:bg-[#1ba39c] transition-all">Search</button>
            </div>

        </section>
    );
}