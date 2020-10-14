import React from 'react';


function tableSetUp(props){
    console.log(props.employees)
return (
    <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            name={this.state.name}
          />
    <table className="table table-hover">
  <thead>
 
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    
  <tr>  {props.employees( (ID, i) => <Item info={ID} key={"item-" + i} />)}
</tr>
          
    
  </tbody>
</table>


)
}








export default tableSetUp;