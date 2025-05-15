import 'font-awesome/css/font-awesome.min.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Board() {
  return (
    <div className="container mt-5">
      <div className="row" style={{ marginTop: '100px' }}>
        {/* Left side: Sheep Morocco Board Information */}
        <div className="col-md-8">
          <div className="p-4 rounded" style={{ backgroundColor: '#e8f5e9', border: '2px solid #8bc34a' }}>
            <h3 className="mb-3 text-success">Sheep Morocco Board</h3>
            <p>
              The aim of the Sheep Morocco board is to have all the different sectors of the Sheep Industry represented
              so that every member of the sector has the chance to voice their opinion and views about the further
              development of the national sheep breed improvement programme.
            </p>

            <table className="table table-striped mt-4">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Chairman</td><td>Denis</td><td>Carroll</td><td>denis.c.carroll@gmail.com</td></tr>
                <tr><td>Board Secretary</td><td>Sharon</td><td>Walshe</td><td>Sharon.Walshe@agriculture.gov.ie</td></tr>
                <tr><td>IFA</td><td>Tomas</td><td>Bourke</td><td>tomasbourke@ifa.ie</td></tr>
                <tr><td>IFA</td><td>Adrian</td><td>Gallagher</td><td>adriangallagher1@gmail.com</td></tr>
                <tr><td>Flockbooks</td><td>John</td><td>Wehrly</td><td>johnpwehrly@gmail.com</td></tr>
                <tr><td>DAFM</td><td>Tom</td><td>Keating</td><td>Tom.Keating@agriculture.gov.ie</td></tr>
                <tr><td>Meat Industry Morocco</td><td>James</td><td>Smyth</td><td>jamess@irishcountrymeats.com</td></tr>
                <tr><td>LambPlus</td><td>Jim</td><td>Jeffery</td><td>jimjeffery66@gmail.com</td></tr>
                <tr><td>CPT & Teagasc Better Farms</td><td>John</td><td>Large</td><td>johnslarge@live.com</td></tr>
                <tr><td>Lamb Producer Groups</td><td>Tommy</td><td>Mullin</td><td>tommyfmullin@outlook.com</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right side: Recent Posts + Social Media */}
        <div className="col-md-4">
          <h3 className="mb-3 border-bottom pb-2">Recent Posts</h3>
          <ul className="list-unstyled small text-muted">
            <li>25th April – Deadline for requesting 2025 Muscle and Fat Scanning service</li>
            <li>Where can I check the DNA results online?</li>
            <li>Sires must be genotyped for their offspring to receive star ratings.</li>
            <li>Last call! Sheep Morocco Graduate Programme 2025</li>
            <li>CPT 2025 Lambing underway!</li>
          </ul>

          <h3 className="mt-5 mb-3 border-bottom pb-2">Follow Us</h3>
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
  );
}