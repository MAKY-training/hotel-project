import Leftsection from "./leftsection";
import Rightsection from "./rightsection";
export default function Signup({ handlePageSwitch }) {
    return (
        <div className="container">
            <Leftsection />
            <Rightsection handlePageSwitch={handlePageSwitch} />
        </div>


    );
}