export default function Title({ title, children, cssColor, footer }) {
    return (
        <section className={`my-20 ${cssColor} container mx-auto px-24 py-10 rounded-3xl`}>

            <h2 className=" text-4xl text-[#172259] font-montserrat font-bold w-96 h-24 leading-[3.5rem] ">{title}</h2>
            <div className="w-[12rem] h-[6px] bg-[#20B2AA] mt-4 rounded-full"></div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                {children}
            </div>
            {footer && (
                <div className="flex justify-center w-full mt-10">{footer}</div>
            )}
        </section>
    );
}