import 'font-awesome/css/font-awesome.min.css'; // N'oublie pas pour les icônes
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
export default function Contact() {
  return (
    <div className="container mt-5" >
      <div className="row"style={{marginTop:'100px'}}>
        {/* Left side: Contact Info + Map */}
        <div className="col-md-8 mb-4">
          <h2 className="mb-4"><i class="bi bi-feather" style={{color:'#8bc34a'}}></i> Head Office</h2>
          <div className="mb-3">
            <p><strong>Address:</strong> Sheep Ireland, Link Road, Ballincollig, Co. Cork, P31 D452</p>
          </div>
          <div className="mb-3">
            <p><strong>Telephone:</strong> 023 882 0451</p>
            <p><strong>WhatsApp:</strong> 083 2063734</p>
          </div>
          <div className="mb-3">
            <p><strong>Email:</strong> <a href="mailto:query@sheep.ie" className="text-primary">query@sheep.ie</a></p>
          </div>
          <div className="mb-4">
            <p>
              Sheep Ireland is located at <a href="https://www.icbf.com/" target="_blank" rel="noopener noreferrer" className="text-primary">ICBF</a>'s Headquarters in Ballincollig, Co. Cork.
            </p>
          </div>

          {/* Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.693640888378!2d-8.599759084374886!3d51.88408737970724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48449045d8f2c0c7%3A0x5a0a0384e26540a1!2sICBF%20EMM%20Service%20Centre!5e0!3m2!1sen!2sie!4v1682598850922!5m2!1sen!2sie"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sheep Ireland Location"
            ></iframe>
          </div>
        </div>

        {/* Right side: Recent Posts + Social Media */}
        <div className="col-md-4">
          {/* Recent Posts */}
          <div className="mb-5">
            <h3 className="mb-3 border-bottom pb-2"><i class="bi bi-feather" style={{color:'#8bc34a'}}></i> Recent Posts</h3>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">25th April – Deadline for requesting 2025 Muscle and Fat Scanning service</li>
              <li className="mb-2">Where can I check the DNA results online?</li>
              <li className="mb-2">Sires must be genotyped for their offspring to receive star ratings.</li>
              <li className="mb-2">Last call! Sheep Ireland Graduate Programme 2025</li>
              <li>CPT 2025 Lambing underway!</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3 border-bottom pb-2"><i class="bi bi-feather" style={{color:'#8bc34a'}}></i> Follow Us</h3>
            <div className="d-flex gap-3">
            <a href="#" className="text-primary fs-4"><FaTwitter /></a>
            <a href="#" className="text-primary fs-4"><FaFacebookF /></a>
            <a href="#" className="text-primary fs-4"><FaLinkedinIn /></a>
            <a href="#" className="text-danger fs-4"><FaInstagram /></a>
            <a href="#" className="text-danger fs-4"><FaYoutube /></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
