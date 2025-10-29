import HotelsCard from "../../Reusable/HotelsCard";

export default function LastHotel({ name, location , city }) {
  console.log(name, location, city);
  return (
    <HotelsCard imageSrc="https://fastly.picsum.photos/id/789/500/400.jpg?hmac=lYCmjOVn6Go2WtrWMtA9P0pLBBQNW3TX1hTEOrfmgjo">
      <h3 className="text-xl font-montserrat font-bold text-white">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <p className="text-sm text-gray-200 font-montserrat mt-1">{city.charAt(0).toUpperCase() + city.slice(1)}, {location.charAt(0).toUpperCase() + location.slice(1)}</p>
    </HotelsCard>
  );
}