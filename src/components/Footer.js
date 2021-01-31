import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="col pt-2" style={styles.container}>
                    <h3 className="mt-3"> &#169; 2021 AAA Designs</h3>
                </div>
            </div>
        )
    }
}


const woodbg = '/images/wood.jpg'

const styles = {
    container: {
        backgroundImage: `url(${woodbg})`,
        backgroundSize: "cover",
        height: 100,
        color: "white"
    }
};

export default Footer