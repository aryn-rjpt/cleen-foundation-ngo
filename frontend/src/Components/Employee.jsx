import '../styles/Employee.css'

const Employee = () => {
  return (
    <div className='empdir-container'>
      <h1>Employee Directory</h1>
      <form action="">
        <input type="text" />
        <button>Search</button>
      </form>

      <div className='table-container'>
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
    </div>
  )
}

export default Employee