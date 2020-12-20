import React from 'react'

const Tweets = (props) => {
    return (
        <div>
            <p>The name is: <bold>{props.me}</bold></p>
            <p>The age is: <bold>{props.age}</bold></p>
            <h3>How much do you want to earn. Ammount is: <bold>{props.counter}</bold> </h3>
       
        </div>
    )
}

export default Tweets
