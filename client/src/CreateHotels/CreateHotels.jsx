// pages/CreateHotels.jsx
import { useState } from "react";
import FormInput from "../CreateHotels/ReusableInput/FormInput.jsx";
import toast from "react-hot-toast";

export default function CreateHotels() {
    const [form, setForm] = useState({
        hotelName: "",
        location: "",
        city: "",
        rooms: "", 
        bathrooms: "",
        parking: "",
        petFriendly: false,
        price: "",
    });

    const update = (k) => (e) => {
        const v = e?.target?.type === "checkbox" ? e.target.checked : e.target.value;
        setForm((f) => ({ ...f, [k]: v }));
    };

    const onSubmit = async (e) => {

        e.preventDefault();
        const loadingToast = toast.loading("Creating hotel...");

        console.log("Form submitted:", form);
        // TODO: client-side validation + POST to backend
        try {
            const res = await fetch("http://localhost:5000/api/hotels/create",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                })
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to create hotel");
            }

            toast.success("Hotel created successfully!");
            console.log("✅ Success:", data);

            // optional: reset form
            setForm({
                hotelName: "",
                location: "",
                city: "",
                rooms: "",
                bathrooms: "",
                parking: "",
                petFriendly: false,
                price: "",
            });

        } catch (err) {
            console.error("❌ Error:", err);
            toast.error(err.message || "Something went wrong. Try again.");
        } finally {
            toast.dismiss(loadingToast); // removes the loading toast
        }
    };
    ;

    return (
        <div className="container mx-auto bg-gradient-to-br from-[#E0F7FA] to-[#F1F8E9] flex flex-col items-center justify-center gap-10 rounded-3xl px-6 py-10 sm:px-12 lg:px-24">
            <h2 className="text-4xl text-[#172259] font-montserrat font-bold w-80 h-24 leading-[3.5rem] text-center">
                Create Your Hotel Listing
            </h2>

            <form onSubmit={onSubmit} className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
                <FormInput
                    label="Hotel Name"
                    id="hotelName"
                    placeholder="Enter hotel name"
                    value={form.hotelName}
                    onChange={update("hotelName")}
                    max={60}
                    hint="Official property name"
                />

                <FormInput
                    label="Location"
                    id="location"
                    placeholder="e.g., Al Abdali, Amman"
                    value={form.location}
                    onChange={update("location")}
                    max={80}
                />

                <FormInput
                    label="City"
                    id="city"
                    placeholder="Enter city"
                    value={form.city}
                    onChange={update("city")}
                    max={40}
                />

                <div className="mb-6 grid grid-cols-2 gap-4">
                    <FormInput
                        label="Rooms"
                        id="rooms"
                        type="number"
                        value={form.rooms}
                        onChange={update("rooms")}
                        min={0}
                        max={10}
                        step={1}
                        hint="Total guest rooms"
                    />
                    <FormInput
                        label="Bathrooms"
                        id="bathrooms"
                        type="number"
                        value={form.bathrooms}
                        onChange={update("bathrooms")}
                        min={0}
                        max={10}
                        step={1}
                    />
                    <FormInput
                        label="Parking Spots"
                        id="parkingSpots"
                        type="number"
                        value={form.parking}
                        onChange={update("parking")}
                        min={0}
                        max={10}
                        step={1}
                    />
                    <FormInput
                        label="Price$"
                        id="price"
                        type="number"
                        value={form.price}
                        onChange={update("price")}
                        min={0}

                        step={1}
                    />
                    <div className="flex items-end">
                        <label className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={form.petFriendly}
                                onChange={update("petFriendly")}
                                className="h-4 w-4"
                            />
                            <span className="text-sm text-gray-700 font-semibold">Pet-friendly</span>
                        </label>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        className="bg-[#20B2AA] hover:bg-[#1e9e9a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Create Listing
                    </button>
                </div>
            </form>
        </div>
    );
}
