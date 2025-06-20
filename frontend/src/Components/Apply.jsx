
import "../styles/Apply.css"
import backgroundImg from "../assets/Teacher.png";
const Apply = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Overlay div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.44)", // lighter overlay
          zIndex: 1,
        }}
      />
     <div className="teacher-form-container">
        <h2>Apply as a Teacher</h2>
        <form className="teacher-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Qualification" />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Mobile Number" />
            <input type="text" placeholder="Teaching Experience" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Father's/Mother's Name" />
            <input type="text" placeholder="Preferred Block/Village" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email ID" />
            <input type="text" placeholder="Aadhar Number" />
          </div>
          <div className="form-group file-group">
            <label>Upload Aadhar</label>
            <input type="file" />
            <label>Upload Qualification Document</label>
            <input type="file" />
          </div>
          <div className="form-group file-group">
            <label>Upload Resume</label>
            <input type="file" />
            <label>Passport Size Photo</label>
            <input type="file" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Apply
