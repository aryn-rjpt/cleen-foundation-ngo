import '../styles/Footer.css';


// Social Media Icons
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h3>About Us</h3>
                <ul>
                    <li>Our Mission</li>
                    <li>Our Team</li>
                    <li>Our Impact</li>
                    <li>Annual Reports</li>
                    <li>Partners</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <h3>Get Involved</h3>
                <ul>
                    <li>Volunteer</li>
                    <li>Donate</li>
                    <li>Fundraise</li>
                    <li>Partner With Us</li>
                </ul>
            </div>

            <div >
                <h3>Resources</h3>
                <ul>
                    <li>Blog</li>
                    <li>News</li>
                    <li>Events</li>
                    <li>Media Kit</li>
                    <li>Help Center</li>
                </ul>
            </div>

            <div >
                <h3>Programs</h3>
                <ul>
                    <li>Education</li>
                    <li>Healthcare</li>
                    <li>Environment</li>
                    <li>Women Empowerment</li>
                    <li>Disaster Relief</li>
                </ul>
            </div>

            <div className='newsletter'>
                <h3>Subscribe to our newsletter</h3>
                <p>Stay updated on our projects, events, and stories of change from communities we serve.</p>
                <form>
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            <div className='copyright'>© Cleen Foundation</div>
            <div className='socials'>
                <a href='#'><RiTwitterXLine /></a>
                <a href='#'><TiSocialFacebook /></a>
                <a href='#'><FaInstagram />&nbsp;</a>
                <a href='#'><TiSocialYoutube /></a>
            </div>
            <div className='links'>
                <a href="#">Terms | </a> 
                <a href="#">Privacy | </a> 
                <a href="#">Cookie Policy</a>
            </div>
        </div>
    )
}

export default Footer