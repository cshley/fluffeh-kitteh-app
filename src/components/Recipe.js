import React from "react";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = () => {
        
    }

    render() {
        console.log(this.props);
        return (
            <div>recipe</div>
        );
    }
};
export default Recipe; 