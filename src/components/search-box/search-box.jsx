import React, { Component }  from "react";
import {connect} from 'react-redux';

import { onSearchChange } from "../../redux/photos/photosactions";

 const Searchbox = ({onSearchChange,photosdata}) => {
  
  return (

    <div class="row">
    <form class="col s12">
      
        <div class="input-field col s12">
          {<input placeholder="See your finacial report" id="first_name" type="text" 
          onChange={(e) => onSearchChange(e.target.value)}
          class="validate"/>}
          
        </div>
        </form>
    </div>
  
  )
};



const mapStateToProps = state => {
  return {
      photosdata: state.photo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (val)=> dispatch(onSearchChange(val))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Searchbox);


