export default function Button({ children, cssClasses, onClick }) {
    return (
        <button className='w-52 h-14 bg-[#20B2AA] rounded-full font-semibold text-sm text-white font-montserrat hover:bg-[#1ba39c] transition-all'>{children}</button>

    );
}