import '../stylePage/footerCs.css';
export default function Footer() {
    return <footer>
      <div class="container">
        <div class="row text-center text-md-start">
          <div class="col-md-4 d-flex flex-column align-items-center align-items-md-start">
            <h6 class="mb-3"><i class="bi bi-feather" style={{color:'#8bc34a'}}></i> Sheep Database Ltd Trading As "Sheep Morocco"</h6>
            <p class="mb-1">Registered Office: Sheep Morocco, Link Road, Ballincollig,<br/>Co. Cork, P31 D452</p>
            <p class="mb-1">Registered: Dublin, Morocco. Registration Number 465004.<br/>Companies Acts 1963 to 2006.</p>
            <p class="mb-1">+353 (023) 882 0451, <a href="mailto:query@sheep.ie">query@sheep.ie</a></p>
          </div>
    
          <div class="col-md-4 d-flex flex-column align-items-center my-4 my-md-0">
            <h6 class="mb-3"><i class="bi bi-feather" style={{color:'#8bc34a'}}></i> ISO Accredited</h6>
            <img src="IMG-NSAI.png" alt="ISO Certified" class="footer-icon"/>
          </div>
    
          <div class="col-md-4 d-flex flex-column align-items-center align-items-md-start">
            <h6 class="mb-3"><i class="bi bi-feather" style={{color:'#8bc34a'}}></i> Terms And Conditions</h6>
            <p class="mb-1">By using this site, you have agreed to accept Sheep Morocco's <a href="#">Terms and Conditions</a>.</p>
            <p class="mb-1">Funded by the Irish Government under the National Development Plan 2007 - 2018.</p>
          </div>
        </div>
      </div>
    </footer>
    
  }
  