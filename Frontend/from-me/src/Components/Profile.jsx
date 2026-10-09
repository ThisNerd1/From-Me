import Navbar from './Navbar';
import { useState } from "react";

function Profile() {
    const [currentColor, setCurrentColor] = useState('transparent');
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
<div className="container mt-5">
<div className="card">
<div className="card-header text-center">
<img src="https://via.placeholder.com/150" alt="Profile" className="rounded-circle" />
<h3>John Doe</h3>
</div>
<div className="card-body">
<h5>Contact Information</h5>
<p>Email: john.doe@example.com</p>
<p>Phone: (123) 456-7890</p>
</div>
</div>
</div>
  </div>
    </>
  )
}

export default Profile;