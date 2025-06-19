import '../styles/Blog.css';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';
import blog7 from '../assets/blog7.jpg';
import blog8 from '../assets/blog8.jpg';

const Blog = () => {
  return (
    <div className='blog-container'>

      <div className='blogs'>
        <form action="">
          <input type="text" placeholder='Search among 463 blogs' />
          <button>Search</button>
        </form>
        <div className="blog-card">
          <img src={blog1} alt="" />
          <div className="blog-heading">
            Empowering Rural Youth Through Digital Literacy
          </div>
          <div className="blog-desc">
            Discover how Cleen Foundation’s new programs are bridging the digital divide in underserved communities.
          </div>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog2} alt="" />
          <div className="blog-heading">
            Clean Water, Brighter Futures: Our Mission in Action
          </div>
          <div className="blog-desc">
            Highlights from our recent clean water projects impacting over 1,000 families.
          </div>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog3} alt="" />
          <div className="blog-heading">
            Voices of Change: Stories from Our Volunteers
          </div>
          <div className="blog-desc">
            Meet the passionate individuals driving grassroots change with Cleen Foundation.
          </div>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog4} alt="" />
          <div className="blog-heading">
            Sustainable Education: Building Schools That Last
          </div>
          <div className="blog-desc">
            How eco-friendly infrastructure is shaping the future of rural education.
          </div>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog5} alt="" />
          <div className="blog-heading">
            The Power of Partnership: Corporate Collaboration for Good
          </div>
          <div className="blog-desc">
            See how alliances with businesses are accelerating our impact.
          </div>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog6} alt="" />
          <div className="blog-heading">
            Health Camps That Heal: A Month of Outreach
          </div>
          <div className="blog-desc">
            A look at our free medical camps and the lives they’ve transformed.
          </div>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog7} alt="" />
          <div className="blog-heading">
            From Idea to Impact: The Journey of a Cleen Foundation Project
          </div>
          <div className="blog-desc">
            Behind the scenes of how a community idea becomes a reality.
          </div>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog8} alt="" />
          <div className="blog-heading">
            Why Education Is at the Heart of Every Solution
          </div>
          <div className="blog-desc">
            Explore why Cleen Foundation believes learning is key to ending poverty.
          </div>
          <button>Read More</button>
        </div>


      </div>

    </div>
  )
}

export default Blog