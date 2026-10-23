import Navbar from './Navbar';
import { useState } from "react";
import { useNavigate } from "react-router";


function Download() {
  const [currentColor, setCurrentColor] = useState('transparent');
  let navigate = useNavigate();
function downloadStuff() {
    //can only send to profile when logged in
    navigate("/Profile", {
    });
  }
//   async function goToBackend() {
//     //my link to backend 
//   const response = await fetch("");
//   return response.json();
// }

// const { data, isLoading, error } = useQuery({
//   //what to grab
//     queryKey: ["users"],
//     //where to get it
//     queryFn: goToBackend
//   });

  //for now send person to profile but when connected to backend add all the stuff then send to profile
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    {/* <button onClick={goToBackend}>Download</button> */}
    <button onClick={downloadStuff}>Download</button>
    </div>
  </>
  )
};

export default Download;

//User downloads folder