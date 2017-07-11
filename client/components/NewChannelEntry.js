import React from 'react';
import {connect} from 'react-redux'

export default function NewChannelEntry (props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/


const mapStateToProps = function (state) {
    return {
    }
}

const mapDispatchToProps = function(dispatch){
   return{

   }
}

const Container = connect(mapStateToProps,mapDispatchToProps )(NewChannelEntry)
export default Container