export default function GuiedsHotels({guides , text} ) {
    return (
        <div>
            <div className='relative h-[27rem] rounded-xl mt-10 p-6 flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-all'>
                
                <img src="https://picsum.photos/500/400" alt="Hotel" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
            </div>
            <h3 className='text-base font-montserrat font-bold text-[#484848] mt-4'>{guides}</h3>
            <p className='text-sm font-medium text-gray-400	font-montserrat'>{text}</p>
            
        </div>

    )
}