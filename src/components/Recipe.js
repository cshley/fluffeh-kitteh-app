import React from "react";
import { async } from "q";

const API_KEY = "d1f5a3acae70dc33db0f071926bd9bc9";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch
    (`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
   
    const res = await req.json();
    console.log(res); 
    
    }

    render() {
        return (
            <div>recipe</div>
        );
    }
};
export default Recipe; 