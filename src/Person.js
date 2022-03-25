import React from 'react';

class Person extends React.Component {
  state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ]
  }
  
  render() {    
    return (
    	<>
            <button onClick={this.displayInfo}>신상정보 확인하기</button>
        </>
    )
  }
}

export default Person;