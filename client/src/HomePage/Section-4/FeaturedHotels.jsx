import AllHotel from './AllHotel';
import Title from "../../Reusable/Title";
import { useEffect, useState } from "react";

export default function FeaturedHotels() {
    const cssColor = ` bg-gradient-to-br from-[#E8FCF6] via-[#F5FFFD] to-[#DFF8FF] `
    const [allHotels, setAllHotels] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/hotels/all")
            .then(res => res.json())
            .then(data => setAllHotels(data.data))
            .catch(err => console.error(err));
    }, []);
    console.log(allHotels);
    return (

        <Title title={"Featured Properties on our Listing"} cssColor={cssColor}>
            {allHotels.length === 0 ? (
                <p className="text-gray-500 font-montserrat">Loading hotels...</p>
            ) : (
                allHotels.map((hotel) => (
                    <AllHotel
                        key={hotel._id}
                        name={hotel.hotelName}
                        city={hotel.city}
                        location={hotel.location}
                        price={hotel.price}
                        bed={hotel.rooms}
                        bath={hotel.bathrooms}
                        car={hotel.parking}
                        paw={hotel.petFriendly}
                    />
                ))
            )}
        </Title>
    );
}