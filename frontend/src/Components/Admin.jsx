
import { NavLink, Outlet } from "react-router-dom"

import '../styles/Admin.css'

export const Employees = () => {
  return (
    <div className="employee-container">
      <h3>New Applications*</h3>

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

      <h3 style={{marginTop:"3rem"}}>Employees</h3>
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
    </div>
  )
}

export const Reports = () => {
  return (
    <div>Reports</div>
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
            <td>Clean Foundation's Impact</td>
            <td>John Doe</td>
            <td>10th September 2024</td>
            <td><button>Edit</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Community Clean-Up Day</td>
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
    <div>Notify</div>
  )
}

const Admin = () => {
  return (
    <div className="admin-layout">
      <h1>Admin Dashboard</h1>
      <nav>
        <NavLink to="/admin/Employees">Employees</NavLink>
        <NavLink to="/admin/reports">Reports</NavLink>
        <NavLink to="/admin/blogs">Blogs</NavLink>
        <NavLink to="/admin/notify">Notify</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Admin
