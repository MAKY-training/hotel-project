import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";

export default function HotelsCard({
    imageSrc,
    children,
}) {
    return (
        <div className="relative h-[25rem] w-full rounded-xl overflow-hidden mt-10 hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <img src={imageSrc} alt="Hotel" className="absolute inset-0 w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/40" />

            <FontAwesomeIcon
                icon={RegularIcons.faHeart} className="absolute top-4 right-4 text-3xl text-white/80 hover:text-[#20B2AA] transition-colors cursor-pointer"
            />
            
            <div className="absolute bottom-0 w-full p-6">
                {children}
            </div>
        </div>
    )
}