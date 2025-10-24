export default function Search({ placeholder }) {
    return (
        <input type="text" className=
            "w-full h-full px-6 border-b-[2px] border-r-[2px] border-gray-200 focus:border-b-[#20B2AA] outline-none"
            placeholder={placeholder} />
    );
}