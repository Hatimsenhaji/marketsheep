import { useState } from 'react';
import '../stylePage/style1.css';
import Produit from '../Stock/Produit';
import NewArt from '../Stock/NewArt';
import { Link } from 'react-router-dom';
export default function Home() {
  const [dis, setDis] = useState('none'); // Pour gérer l'affichage du détail de l'image

  const Detail = (id) => {
    alert('Details for product ID: ' + id);
  };
  return (<>
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('homeImg/pexels-pixabay-39352.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white py-28">
        <h1 className="text-5xl font-bold" style={{marginTop:'70px',paddingTop:'60px'}}>Welcome to Sheep Market</h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto">
        Quality sheep, raised with care and transparency.
        </p>
      </div>

      {/* Cartes sur l'image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="m-4 d-flex flex-wrap justify-content-evenly">
          {Produit.map((elm, i) => (
            <div className="card m-2" key={i} style={{ width: '30rem' }}>
             <img
                  src={elm.Photo}
                  width="400px"
                  height="400px"
                  className="card-img-top img-hover-dark"
                  alt={elm.NomMoto}
                 />
              <div className="card-body">
                <h5 className="card-title">{elm.NomMoto}</h5>
                <p className="card-text">{elm.Mark}</p>
                <h6 className="card-title">{elm.Prix} DH</h6>
                <Link to={`/Details/${elm.id}`}>
  <div className="btn btn-outline-success">
    Détails
  </div>
</Link>

                <div className="btn btn-outline-primary mx-2">Add to Cart</div>
              </div>
              <img
                src={elm.Detail}
                width="400px"
                height="400px"
                style={{ display: dis }}
                alt={`Détail ${elm.NomMoto}`}
              />
            </div>
          ))}
        </div>
      </div>
</div>
      <div class="container mt-4">
      <div className="d-flex justify-content-evenly text-center py-4">
  {/* Sign In */}
  <div>
    <a href="#">
      <i className="bi bi-box-arrow-in-left text-green-500 text-2xl" style={{fontSize:'32px',color:'green'}}></i>
    </a>
    <p className="mt-2 text-black">
      Sign in 
      LambPlus Online Services
    </p>
  </div>

  {/* Ram Search */}
  <div>
    <a href="#">
      <i className="bi bi-search text-green-500 text-2xl" style={{fontSize:'32px',color:'green'}}></i>
    </a>
    <p className="mt-2 text-black" style={{marginTop:'100px'}}>Ram Search</p>
  </div>

  {/* Latest News */}
  <div>
    <a href="#">
      <i className="bi bi-newspaper text-green-500 text-2xl" style={{fontSize:'32px',color:'green'}}></i>
    </a>
    <p className="mt-2 text-black">Latest News</p>
  </div>
</div>
<center>
  <h4>DOWNLOAD THE LAMBPLUS APP</h4>
</center>
        <div class="download-buttons-container" >
            <a href="https://play.google.com/store/games?hl=en&pli=1" class="download-link">
                <img src="AppStore.PNG" alt="Télécharger sur Google Play" class="app-badge"/>
            </a>
            <a href="https://www.apple.com/app-store/" class="download-link">
                <img src="gougleStore.PNG" alt="Télécharger sur l'App Store" class="app-badge"/>
            </a>
        </div>
    </div>
  
   <h5 className='NewArt'>New</h5>
     {/* New___________ */}
     <div className="absolute inset-0 flex items-center justify-center z-10">
  <div className="m-4 d-flex flex-wrap justify-content-evenly">
    {NewArt.map((elm, i) => (
      <div
        className="card m-3 border-0 shadow-sm"
        key={i}
        style={{ width: '22rem', overflow: 'hidden' }}
      >
        {/* Image + bouton */}
        <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
          <img
            src={elm.photo}
            className="card-img-top image-hover"
            style={{
              height: '100%',
              objectFit: 'cover',
              transition: 'all 0.5s ease'
            }}
            alt={elm.title}
          />

          {/* Bouton visible au survol de l'image */}
          <div className="position-absolute top-50 start-50 translate-middle">
            <button
              className="btn btn-outline-light image-btn"
              onClick={() => Detail(elm.id)}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Texte dessous */}
        <div className="card-body text-center">
          <h5 className="card-title">{elm.title}</h5>
          <p className="card-text small text-muted">{elm.text}</p>
        </div>
        {/* filse dessous */}
        <div className='footerArt'>
        <i className="bi-folder2-open"></i>/<a href='#'>News</a>/<a href='#'>Weekly Update</a>
        </div>
      </div>
    ))}
  </div>
</div>

{/* contact dessous */}
<div className='seeM'>
  <a href='#' className='Seemor'> SEE MORE  <i className="bi-chevron-double-right"></i> </a>
</div>
<center>
<h3 style={{color:'#8bc34a',marginTop:'40px',marginBottom:'20px'}}>FOLLOW US</h3>
<div className="d-flex gap-4 justify-content-center align-items-center my-4">
  <a href="https://facebook.com" target="_blank" className="text-decoration-none" style={{ color: '#1877F2' }}>
    <i className="bi bi-facebook fs-2"></i>
  </a>
  <a href="https://instagram.com" target="_blank" className="text-decoration-none" style={{ color: '#E4405F' }}>
    <i className="bi bi-instagram fs-2"></i>
  </a>
  <a href="https://twitter.com" target="_blank" className="text-decoration-none" style={{ color: '#1DA1F2' }}>
    <i className="bi bi-twitter-x fs-2"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" className="text-decoration-none" style={{ color: '#0A66C2' }}>
    <i className="bi bi-linkedin fs-2"></i>
  </a>
  <a href="https://youtube.com" target="_blank" className="text-decoration-none" style={{ color: '#FF0000' }}>
    <i className="bi bi-youtube fs-2"></i>
  </a>
  <a href="https://wa.me/your-number" target="_blank" className="text-decoration-none" style={{ color: '#25D366' }}>
    <i className="bi bi-whatsapp fs-2"></i>
  </a>
</div>

</center>

<div class="container">
  <div class="d-flex justify-content-around flex-wrap">
    
    <div class="newsletter">
      <h5>NEWSLETTER</h5>
      <Link to='/register'><div>REGISTER HERE</div></Link>
      <p>Sheep Ireland & ICBF news and updates<br/>are delivered to your email weekly.</p>
    </div>

    <div class="partners">
      <h5>OUR PARTNERS</h5>
      <img src="homeImg/icbf.jpg" alt="ICBF Logo"/>
    </div>

  </div>
</div>
    </>
    
  );
}
