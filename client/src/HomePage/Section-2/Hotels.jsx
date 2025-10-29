import LastHotel from './LastHotel';
import Title from "../../Reusable/Title";
import { useEffect, useState } from "react";

export default function Hotels() {
    const cssColor = ` bg-gradient-to-bl from-[#F1F8E9] to-[#E0F7FA] `
    const [latestHotels, setLatestHotels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/hotels/latest")
            .then(res => res.json())
            .then(data => setLatestHotels(data.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <Title title={"Latest on the Property Listing"} cssColor={cssColor}>
            {latestHotels.length === 0 ? (
                <p className="text-gray-500 font-montserrat">Loading hotels...</p>
            ) : (
                latestHotels.slice(0, 3).map((hotel) => (
                    
                    <LastHotel
                        key={hotel._id}
                        name={hotel.hotelName}
                        city={hotel.city}
                        location={hotel.location}
                    />
                ))
            )}
        </Title>
    );
}