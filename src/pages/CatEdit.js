import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedCat: {
        name:this.props.cat.name,
        age: this.props.cat.age,
        status: this.props.cat.status,
        looking_for: this.props.cat.looking_for,
        about_me: this.props.cat.about_me,
        hobbies: this.props.cat.hobbies,
        image: this.props.cat.image
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { updatedCat } = this.state
    updatedCat[e.target.name] = e.target.value
    this.setState({ updatedCat: updatedCat })
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.updatedCat, this.props.cat.id)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.name }
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input 
              type="text" 
              name="age" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.age }
          />
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input 
              type="text" 
              name="status"
              onChange={this.handleChange}
              value={ this.state.updatedCat.status }
            />
          </FormGroup>
          <FormGroup>
            <Label for="looking_for">Looking For</Label>
            <Input 
              type="text" 
              name="looking_for" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.looking_for }
            />
          </FormGroup>
          <FormGroup>
            <Label for="about_me">About Me</Label>
            <Input 
              type="text" 
              name="about_me" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.about_me }
            />
          </FormGroup>
          <FormGroup>
            <Label for="hobbies">Hobbies</Label>
            <Input 
              type="text" 
              name="hobbies" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.hobbies }
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input 
              type="text" 
              name="image" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.image }
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}
            >Submit Cat
          </Button>
          {/* if submitted is true then go to catindex page  */}
          { this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`}/> }
        </Form>
      </>
    )
  }
}



export default CatEdit