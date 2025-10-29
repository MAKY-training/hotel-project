import BackgroundImg from "../assets/licensed-image.jpg";
import Button from '../Reusable/Button';
export default function PromomoSection({ title, text , btnText }) {
    return (
        <section className="container mx-auto my-20 bg-gradient-to-br from-[#E0F7FA] to-[#F1F8E9] flex flex-col-reverse items-center justify-between gap-10 rounded-3xl px-6 py-16 sm:px-12 lg:flex-row lg:px-24">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <h2 className=" text-4xl text-[#172259] font-montserrat font-bold w-80 h-24 leading-[3.5rem] ">{title}</h2>
                <p className="my-8 max-w-md text-base font-montserrat text-[#373737]">{text}</p>
                <Button>{btnText}</Button>
            </div>
            <img src={BackgroundImg} alt="" className="w-[22rem] h-[18rem] rounded-2xl object-cover sm:w-[25rem] sm:h-[20rem] lg:w-[28.5rem] lg:h-[21.5rem]" />

        </section>
    );
}