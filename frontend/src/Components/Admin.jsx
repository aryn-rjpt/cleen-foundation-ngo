
import { NavLink, Outlet } from "react-router-dom"

import '../styles/Admin.css'

export const Employees = () => {
  return (
    <div className="employee-container">
      <h3>New Applications</h3>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Position</th>
            <th>View</th>
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
    <div>Blogs</div>
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
