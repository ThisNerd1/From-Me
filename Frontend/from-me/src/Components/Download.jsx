import Navbar from './Navbar';


function Download() {
  const [currentColor, setCurrentColor] = useState('transparent');
  async function goToBackend() {
    //my link to backend 
  const response = await fetch("");
  return response.json();
}

const { data, isLoading, error } = useQuery({
  //what to grab
    queryKey: ["users"],
    //where to get it
    queryFn: goToBackend
  });

  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    <button onClick={goToBackend}>Download</button>
    </div>
  </>
  )
};

export default SubCategory;

//User downloads folder