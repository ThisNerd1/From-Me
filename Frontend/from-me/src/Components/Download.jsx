import Navbar from './Navbar';


function Download() {
  const [currentColor, setCurrentColor] = useState('transparent');
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    </div>
  </>
  )
};

export default SubCategory;