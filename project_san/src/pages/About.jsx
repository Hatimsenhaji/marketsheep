import 'font-awesome/css/font-awesome.min.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../stylePage/styleAbout.css';
export default function About() {
  return (
    <div className="container mt-5">
      <div className="row" style={{ marginTop: '100px' }}>
        {/* Left side: Background + History */}
        <div className="col-md-8 mb-5">
          <h2 className="mb-4 text-success fw-bold">About Sheep Morocco</h2>
          <p className="text-muted" style={{ textAlign: 'justify' }}>
            “Sheep Morocco” is the trading name of Sheep Database CLG and was formed in 2009 after a period of extensive consultation with the sheep industry.
            We were designated with the responsibility of increasing the rate of genetic gain in the Irish sheep sector by identifying and promoting the use of rams 
            with more profitable and sustainable genetics. This is achieved by gathering performance data from the top rams in the country and accessing their 
            strengths and weaknesses using a genetic evaluation which is updated weekly. The results are displayed in sales catalogues and online via a star rating system.
          </p>

          <h4 className="mt-4 fw-semibold text-success">Key Events Timeline</h4>
          <ul className="timeline list-unstyled text-muted">
            <li><strong>June 2019:</strong> Irish Suffolk sheep society joins Sheep Morocco database.</li>
            <li><strong>May 2019:</strong> Start of across-breed evaluations and carcass data inclusion.</li>
            <li><strong>April 2019:</strong> Genotyping and DNA parent prediction advances.</li>
            <li><strong>May 2018:</strong> Charollais flockbook migration.</li>
            <li><strong>Feb 2018:</strong> Launch of the LambPlus mobile app.</li>
            <li><strong>Jan 2018:</strong> Record number of LambPlus breeders.</li>
            <li><strong>May 2017:</strong> Online ordering of genotypes begins.</li>
            <li><strong>March 2017:</strong> First results from OVIGEN genotyping.</li>
            <li><strong>July 2016:</strong> €uroStar validation data workshops.</li>
            <li><strong>Dec 2014:</strong> Launch of OVIGEN research project.</li>
            <li><strong>Jan 2014:</strong> LambPlus membership record set.</li>
            <li><strong>Dec 2013:</strong> New website and flockbook tools online.</li>
            <li><strong>Jan 2013:</strong> Launch of the Sheep Technology Adoption Programme.</li>
            <li><strong>Aug 2012:</strong> First LambPlus ram sale and industry contribution.</li>
            <li><strong>2009:</strong> Sheep Morocco officially starts operations.</li>
            <li><strong>2008:</strong> Strategic foundation and company formation.</li>
            <li><strong>2007–2006:</strong> Proposal and strategy development phase.</li>
          </ul>
        </div>

        {/* Right side: Recent Posts + Social Media */}
        <div className="col-md-4">
          {/* Recent Posts */}
          <div className="mb-5">
            <h3 className="mb-3 border-bottom pb-2">
              <i className="bi bi-feather" style={{ color: '#8bc34a' }}></i> Recent Posts
            </h3>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">25th April – Deadline for requesting 2025 Muscle and Fat Scanning service</li>
              <li className="mb-2">Where can I check the DNA results online?</li>
              <li className="mb-2">Sires must be genotyped for their offspring to receive star ratings.</li>
              <li className="mb-2">Last call! Sheep Morocco Graduate Programme 2025</li>
              <li>CPT 2025 Lambing underway!</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3 border-bottom pb-2">
              <i className="bi bi-feather" style={{ color: '#8bc34a' }}></i> Follow Us
            </h3>
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
