import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import HotelsCard from "../../Reusable/HotelsCard";

function Stat({ icon, value }) {
    return (
        <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={icon} className="text-xl text-[#484848]" />
            <span className="text-xl font-semibold text-[#484848] font-montserrat">
                {value}
            </span>
        </div>
    );
}

export default function AllHotel({ name, city, location , price , bed , bath , car , paw}) {
    return (
        <div>
            <HotelsCard imageSrc="https://fastly.picsum.photos/id/789/500/400.jpg?hmac=lYCmjOVn6Go2WtrWMtA9P0pLBBQNW3TX1hTEOrfmgjo" onFavorite={() => {}}>
        <div className="flex flex-col gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src="https://fastly.picsum.photos/id/789/500/400.jpg?hmac=lYCmjOVn6Go2WtrWMtA9P0pLBBQNW3TX1hTEOrfmgjo"
              alt="Host"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm font-medium text-gray-200 font-montserrat">
            {price} USD
          </p>
        </div>
      </HotelsCard>

            <h3 className='text-base font-montserrat font-bold text-[#484848] mt-4'>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <p className='text-sm font-medium text-gray-400	font-montserrat'>{city.charAt(0).toUpperCase() + city.slice(1)}, {location.charAt(0).toUpperCase() + location.slice(1)}</p>

            <div className='flex  justify-between w-64'>
                <Stat icon={SolidIcons.faBed} value={bed} />
                <Stat icon={SolidIcons.faBath} value={bath} />
                <Stat icon={SolidIcons.faCar} value={car} />
                <Stat icon={SolidIcons.faPaw} value={paw} />

            </div>
        </div>

    )
}