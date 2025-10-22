import pic from "../../assets/mess.svg";
import people from "../../assets/people.svg";
export default function Leftsection(){
    return(
        <div id="leftsection">
                <img id="beauty" src={pic} alt="beauty"/>
                <img src={people} id="people" alt="people" />
                <p id="ourword">Simple stays,<br /> Great memories </p>
                <p id="sometext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                
        </div>
    );
}