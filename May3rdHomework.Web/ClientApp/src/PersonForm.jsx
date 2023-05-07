import React from 'react';


class PersonForm extends React.Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" onChange={this.props.onFirstNameChange} placeholder="First Name" value={this.props.firstName} className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" onChange={this.props.onLastNameChange} placeholder="Last Name" value={this.props.lastName} className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" onChange={this.props.onAgeChange} placeholder="Age" value={this.props.age} className="form-control" />
                    </div>
                    <div className="col-md-1">
                        <button onClick={this.props.onAddClick} className="btn btn-primary">Add</button>
                    </div>
                    <div className="col-md-1">
                        <button onClick={this.props.onClearClick} className="btn btn-warning">Clear</button>
                    </div>

                </div>
            </div>


        )
    }
}

export default PersonForm;