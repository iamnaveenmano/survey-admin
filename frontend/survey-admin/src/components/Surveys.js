import React, { Component } from 'react';
import SurveyItem from './SurveyItem'

class Surveys extends Component {
 render(){
    console.log(this.props.surveys)

    return this.props.surveys.map((survey) => (
        <SurveyItem key={survey.id} survey={survey} />
    ))
 }
};

export default Surveys;