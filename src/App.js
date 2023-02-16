import React from "react";
import Celebrity from "./Celebrity";
import './App.css'
import contacts from "./Contacts";

function App() {
  return (
    
    <div>
    <h1 className="heading">My Contacts</h1>
        <Celebrity 
            name={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            email={contacts[0].email}
        />,
        <Celebrity 
            name={contacts[1].name}
            img={contacts[1].imgURL}
            tel={contacts[1].phone}
            email={contacts[1].email}
        />,
        <Celebrity 
            name={contacts[2].name}
            img={contacts[2].imgURL}
            tel={contacts[2].phone}
            email={contacts[2].email}
        />,
    </div>
  )
}

export default App;