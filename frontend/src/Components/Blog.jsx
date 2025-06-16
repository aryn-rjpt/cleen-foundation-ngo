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
          <p className="blog-heading">
            Empowering Rural Youth Through Digital Literacy
          </p>
          <p>
            Discover how Cleen Foundation’s new programs are bridging the digital divide in underserved communities.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog2} alt="" />
          <p className="blog-heading">
            Clean Water, Brighter Futures: Our Mission in Action
          </p>
          <p>
            Highlights from our recent clean water projects impacting over 1,000 families.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog3} alt="" />
          <p className="blog-heading">
            Voices of Change: Stories from Our Volunteers
          </p>
          <p>
            Meet the passionate individuals driving grassroots change with Cleen Foundation.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog4} alt="" />
          <p className="blog-heading">
            Sustainable Education: Building Schools That Last
          </p>
          <p>
            How eco-friendly infrastructure is shaping the future of rural education.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog5} alt="" />
          <p className="blog-heading">
            The Power of Partnership: Corporate Collaboration for Good
          </p>
          <p>
            See how alliances with businesses are accelerating our impact.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog6} alt="" />
          <p className="blog-heading">
            Health Camps That Heal: A Month of Outreach
          </p>
          <p>
            A look at our free medical camps and the lives they’ve transformed.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog7} alt="" />
          <p className="blog-heading">
            From Idea to Impact: The Journey of a Cleen Foundation Project
          </p>
          <p>
            Behind the scenes of how a community idea becomes a reality.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog8} alt="" />
          <p className="blog-heading">
            Why Education Is at the Heart of Every Solution
          </p>
          <p>
            Explore why Cleen Foundation believes learning is key to ending poverty.
          </p>
          <button>Read More</button>
        </div>

      </div>

    </div>
  )
}

export default Blog