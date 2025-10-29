import GuiedsHotels from './GuiedsHotels';
import Title from "../../Reusable/Title";
import Button from '../../Reusable/Button';

export default function Guides() {
    const cssColor = ` bg-gradient-to-br from-[#E0F7FA] to-[#F1F8E9] `
    return (
        <Title
            title="Property Rental Guides & Tips"
            cssColor={cssColor}
            footer={
                <Button >
                    View All Blogs
                </Button>
            }
        >
            <GuiedsHotels guides={"Choose the right property!"} text={"Economy"} />
            <GuiedsHotels guides={"Best environment for rental"} text={"Lifestyle"} />
            <GuiedsHotels guides={"Boys Hostel Apartment"} text={"Property"} />
        </Title>

    );
}