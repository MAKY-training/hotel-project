import Leftsection from "./leftsection";
import Rightsection from "./rightsection";
export default function Signup({ handlePageSwitch }) {
    return (
        <div id="container">
            <Leftsection />
            <Rightsection handlePageSwitch={handlePageSwitch} />
        </div>


    );
}