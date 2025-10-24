import HotelsCard from "../../Reusable/HotelsCard";

export default function LastHotel({ name, location , city }) {
  return (
    <HotelsCard imageSrc="https://picsum.photos/400/300">
      <h3 className="text-xl font-montserrat font-bold text-white">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <p className="text-sm text-gray-200 font-montserrat mt-1">{city.charAt(0).toUpperCase() + city.slice(1)}, {location.charAt(0).toUpperCase() + location.slice(1)}</p>
    </HotelsCard>
  );
}