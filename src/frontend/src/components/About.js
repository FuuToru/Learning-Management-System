import { useParams } from "react-router-dom";

function About(){
    let {id} = useParams();
    return (
        <h2>About</h2>

    )
}
export default About;