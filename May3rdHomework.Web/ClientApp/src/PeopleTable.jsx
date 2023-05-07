import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonForm from './PersonForm'
import PersonRow from './PersonRow'

class PeopleTable extends React.Component {

    state = {
        people: [],
        currentFirstName: "",
        currentLastName: "",
        currentAge: ""

    }

    onAddClick = () => {
        const copy = [...this.state.people]
        copy.push({
            firstName: this.state.currentFirstName,
            lastName: this.state.currentLastName,
            age: this.state.currentAge
        })
        this.setState({ people: copy, currentFirstName: "", currentLastName: "", currentAge: "" })
    }

    onFirstNameChange = (e) => {
        this.setState({ currentFirstName: e.target.value })
    }

    onLastNameChange = (e) => {
        this.setState({ currentLastName: e.target.value })
    }

    onAgeChange = (e) => {
        this.setState({ currentAge: e.target.value })
    }

    onClearClick = () => {
        this.setState({ people: [] })
    }

    render() {
        {
            return (
                <div className="container mt-5">
                    <PersonForm onAddClick={this.onAddClick} firstName={this.state.currentFirstName}
                        lastName={this.state.currentLastName} age={this.state.currentAge}
                        onFirstNameChange={this.onFirstNameChange} onLastNameChange={this.onLastNameChange}
                        onAgeChange={this.onAgeChange} onClearClick={this.onClearClick} />
                    {this.state.people.length === 0 ?
                        <h1>No poeple added yet, add some people!!</h1> :
                        <div>
                            <table className="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <PersonRow people={this.state.people} />
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            )
        }
    }
};

export default PeopleTable;