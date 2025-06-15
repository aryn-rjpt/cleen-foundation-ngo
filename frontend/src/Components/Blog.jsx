import '../styles/Blog.css';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.avif';
import blog7 from '../assets/blog7.jpg';
import blog8 from '../assets/blog8.jpg';

const Blog = () => {
  return (
    <div className='blog-container'>
      <form action="">
        <input type="text" placeholder='Search among 463 blogs' />
        <button>Search</button>
      </form>

      <div className='blogs'>
        <div className="blog-card">
          <img src={blog1} alt="" />
          <p className="blog-heading">
            This is a title
          </p>
          <p>
            This is a desc
          </p>
          <button>Read More</button>

        </div>
        <div className="blog-card">
          <img src={blog2} alt="" />
          <p className="blog-heading">
            This is a title
          </p>
          <p>
            This is a desc
          </p>
          <button>Read More</button>
        </div>
        <div className="blog-card">
          <img src={blog3} alt="" />
          <p className="blog-heading">
            This is a title
          </p>
          <p>
            This is a desc
          </p>
          <button>Read More</button>
        </div>
        <div className="blog-card">
          <img src={blog4} alt="" />
          <p className="blog-heading">
            This is a title
          </p>
          <p>
            This is a desc
          </p>
        <button>Read More</button>
        </div>
        <div className="blog-card">
          <img src={blog5} alt="" />
          <p className="blog-heading">
            This is a title
          </p>
          <p>
            This is a desc
          </p>
        <button>Read More</button>
        </div>
        <div className="blog-card">
          <img src={blog6} alt="" />
          <p className="blog-heading">
            This is a title
          </p>
          <p>
            This is a desc
          </p>
        <button>Read More</button>
        </div>
        <div className="blog-card">
          <img src={blog7} alt="" />
          <p className="blog-heading">
            This is a title
          </p>
          <p>
            This is a desc
          </p>
        <button>Read More</button>
        </div>
        <div className="blog-card">
          <img src={blog8} alt="" />
          <p className="blog-heading">
            This is a title
          </p>
          <p>
            This is a desc
          </p>
        <button>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default Blog