import FaviconClear from './Forms/FaviconCLear.png'

const Author = () => {
  return ( 
    <div>
      {/* <h6>Built by  <img src="./Forms/FaviconCLear.png" alt="Developer" /></h6> */}
      <h6 style={{fontStyle: 'italic', textAlign:'center'}}>  Built by  <img style={{maxHeight: '1.5rem'}} src={FaviconClear} alt="CT_Favicon" />, a Full Stack Developer</h6>
      <a href="https://chuongtang.github.io/aboutme" target="_blank" rel="noopener noreferrer">More about me.</a>
    </div>
   
   );
}
 
export default Author;