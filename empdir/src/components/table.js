import React from 'react';


function tableSetUp(props){
return (
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ID</th>
      <td>First</td>
      <td>Last</td>
      <td>Phone</td>
      <td>Email</td>
      <td>Location</td>
    </tr>
    
    
  </tbody>
</table>
)
}









export default tableSetUp;