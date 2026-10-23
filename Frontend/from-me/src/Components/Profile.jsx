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
<h3>First and Last Name</h3>
{/* CRUD Account Link */}
</div>
<div className="card-body">
<h5>Contact Information</h5>
<p>Email: example@example.com</p>
<p>Phone: (123) 456-7890</p>
{/* More information potentially */}
</div>
<table class="table table-bordered">
  <thead>
      <tr>
        <th>Motivation Folder</th>
        {/* this part gets added in only after the user "downloads" the folder */}
        <th>Tracker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* link plus a short description of which one or force name convention like fitness_post_workout.zip */}
        <td>Folder Stuff</td>
        {/*this part gets added in only after the user "downloads" the folder
           same with this part but the tracker has a link to a page or something*/}
        <td>Tracker Details</td>
        {/* could def add more as the user adds more to the motivation, plus link*/}
      </tr>
    </tbody>
</table>
</div>
</div>
</div>
    </>
  )
}

export default Profile;