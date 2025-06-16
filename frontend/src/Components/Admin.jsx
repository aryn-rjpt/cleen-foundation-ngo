
import { NavLink, Outlet } from "react-router-dom"

import '../styles/Admin.css'

export const Employees = () => {
  return (
    <div className="employee-container">
      <h3>New Applications* ( Showing 2 of 10 ) </h3>

      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Teacher</td>
            <td><button>View</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Multi-Tasking Staff</td>
            <td><button>View</button></td>
          </tr>
        </tbody>
      </table>

      <button>View All</button>

      <h3 style={{ marginTop: "3rem" }}>Employees</h3>
      <table>
        <thead>
          <tr>
            <th>EmpId</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>John Doe</td>
            <td>Teacher</td>
            <td>Education</td>
            <td>New York</td>
            <td><button>View Details</button></td>
          </tr>
          <tr>
            <td>102</td>
            <td>Jane Smith</td>
            <td>Multi-Tasking Staff</td>
            <td>Support</td>
            <td>Los Angeles</td>
            <td><button>View Details</button></td>
          </tr>
          <tr>
            <td>103</td>
            <td>Emily Johnson</td>
            <td>Volunteer</td>
            <td>Community Service</td>
            <td>Chicago</td>
            <td><button>View Details</button></td>
          </tr>
        </tbody>
      </table>

      <button>View All</button>

    </div>
  )
}

export const Reports = () => {
  return (
    <h1 style={{textAlign: "center"}}>Reports Coming Soon</h1>
  )
}

export const Blogs = () => {
  return (
    <div className="blogs-container">

      <button>Add New</button>

      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published on</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cleen Foundation's Impact</td>
            <td>John Doe</td>
            <td>10th September 2024</td>
            <td><button>Edit</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Community Cleen-Up Day</td>
            <td>Jane Smith</td>
            <td>1st January 2025</td>
            <td><button>Edit</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Volunteer Stories</td>
            <td>Emily Johnson</td>
            <td>3rd March 2025</td>
            <td><button>Edit</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Fundraising Success</td>
            <td>Michael Brown</td>
            <td>19 August 2099</td>
            <td><button>Edit</button></td>
          </tr>
        </tbody>

      </table>


    </div>
  )
}

export const Notify = () => {
  return (
    <div className="notify-container">

      <form action="">

        <label htmlFor="title">Title*</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="desc">Description*</label>
        <textarea id="desc" name="desc" rows="4" required></textarea>

        <label htmlFor="attach-img">Upload Image</label>
        <input type="file" id="attach-img" name="attach-img" />

        <button type="submit">Publish</button>


      </form>
    </div>
  )
}

const Admin = () => {
  return (
    <div className="admin-layout">
      <h1>Admin Dashboard</h1>
      <nav>
        <NavLink to="Employees">Employees</NavLink>
        <NavLink to="reports">Reports</NavLink>
        <NavLink to="blogs">Blogs</NavLink>
        <NavLink to="notify">Notify</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Admin
