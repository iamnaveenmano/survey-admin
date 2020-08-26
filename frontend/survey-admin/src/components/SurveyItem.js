import React, { Component } from 'react';

class SurveyItem extends Component {
    render() {
        return (
        // <div>
        //     <p>{ this.props.survey.name }</p>
        // </div>
 <table class="table">
  <thead>
    <tr>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{ this.props.survey.name }</td>
    </tr>
  </tbody>
</table>
    )
    }
}

export default SurveyItem;