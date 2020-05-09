import React from "react";
import {Redirect} from "react-router-dom";

export const redirectComponentHoc = (Component) => {
  class RedirectComponent extends React.Component{
      render() {
          return <Component {...this.props}/>
      }
  }
    return RedirectComponent
}
