import React,{ Component } from "react";


class KittehImages extends Component {

    /*lifecycle part one*/
  
    constructor() {  //remember that a constructor is used to build things
        super();
         this.state = {
             pictures: [], /*We want our retrieved images in an empty array, 
                            this will be the first state (state is like water, 
                            it can change in form) */
        };
     }

      /*lifecycle part two*/
   
    async componentDidMount() { //lifecycle method
        fetch("https://api.thecatapi.com/v1/images/search", {  //
            headers: {
                "x-api-key": "2c3c09ea-a104-4523-beec-038ac78a354f",
            }
        }) //accesses api (fetch) 
        .then(results => {
            return results.json()
            .then(data => {
                let pictures = data.map((cat) => { 
                    /*this will map(sort through and find) over data and retrieve what we want*/
                    return( /*key is used to set the key to pic result, ensures the dom correponds with the data object*/ 
                        <div key={cat.url}>  
                            <img src={cat.url} />
                        </div>
                    )
                }) //returns the data formatted in json
      
      
      
                /*lifecycle part three*/

                this.setState({ pictures: pictures }); /* here we are altering state, from the empty array in
                part one to the pictures recieved from the api in part two*/
                console.log("state", this.state.pictures)  
            })
            .catch(err => {
                console.error(err); // if using promise (defining what is gonna happen), always use catch error
            })
        .catch(err => {
            console.error(err);
        })

    })
}
/*lifecycle part four*/   
/*render to dom*/ 
                 
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-7 mx-auto d-block kittehImage">

           
            {this.state.pictures}
            </div>
            </div>
            </div>
        )
    }

}

   

export default KittehImages; 