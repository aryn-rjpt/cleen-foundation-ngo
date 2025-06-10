
import "../styles/Apply.css"

const Apply = () => {
  return (
    <div className="application-container">
      <h1>Apply as a Teacher</h1>

      <form action="">

        <div className="application-row">

          <div>

            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="mobile">Mobile Number</label>
            <input type="number" id="mobile" name="mobile" />

            <label htmlFor="parent">Father's/Mother's Name</label>
            <input type="text" id="parent" name="parent" required />

            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="aadhar">Upload Aadhar</label>
            <input type="file" id="aadhar" name="aadhar" required />

            <label htmlFor="resume">Upload Resume</label>
            <input type="file" id="resume" name="resume" required />

          </div>

          <div>          

            <label htmlFor="qualification">Qualification</label>
            <input type="text" id="qualification" name="qualification" required />

            <label htmlFor="experience">Teaching Experience</label>
            <input type="text" id="experience" name="experience" required/>

            <label htmlFor="village">Preferred Block/Village</label>
            <input type="text" id="village" name="village" required />

            <label htmlFor="aadhar">Aadhar Number</label>
            <input type="number" id="aadhar" name="aadhar" required maxLength={16} minLength={16}/>

            <label htmlFor="qualification-doc">Upload Qualification Document</label>
            <input type="file" id="qualification-doc" name="qualification-doc" required />

            <label htmlFor="photo">Passport Size Photo</label>
            <input type="file" id="photo" name="photo" required />

          </div>
        
        </div>
       

        <button type="submit">Submit</button>


      </form>


    </div>
  )
}

export default Apply
