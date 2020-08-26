import React from 'react'

export default function SurveyItem( {survey} ) {
    return (
        <div className="container">
            <table className="table table-striped">
            <tbody>
                <tr className="row align-items-start">
                <td className="col-sm">{survey.name}</td>
                <td className="col-sm"><button type="button" className="btn btn-outline-primary">View</button></td>
                <td className="col-sm"><button type="button" className="btn btn-outline-danger">Delete</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
