import react, {useState} from "react";

function Text(){
    const[name1, firstName] = useState("")
    const[name2, lastName] = useState("")
    function FirstName(event){
        firstName(event.target.value);
    }
    function LastName(event){
        lastName(event.target.value);
    }
    
    return <div>
        <h1>This is an functional component</h1>
        <h2>Hello {name1}{name2}</h2>
        <input onChange = {FirstName} type="text" placeholder="Type first name"></input>
        <input onChange = {LastName} type="text" placeholder="Type Last name"></input>
        <button>Submit</button>
    </div>
}
export default Text;