import { Component } from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'

 class CatNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCat: {
                name:"",
                age:"",
                status:"",
                looking_for:"",
                about_me:"",
                hobbies:"",
                image:""
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        const { newCat } = this.state
        // exract the key(name) from the newCat input and assign it the value
        newCat[e.target.name] = e.target.value
        // console.log(e.target.name)
        // console.log(e.target.value)
        this.setState({ newCat: newCat })
    }

    handleSubmit = () => {
        this.props.createNewCat(this.state.newCat)
        this.setState({ submitted: true })
        }
        render() {
            return (
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                        type="text"
                        name="age"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Status</Label>
                        <Input
                        type="text"
                        name="status"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="looking_for">Looking For</Label>
                        <Input
                        type="text"
                        name="looking_for"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="about_me">About Me</Label>
                        <Input
                        type="text"
                        name="about_me"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="hobbies">Hobbies</Label>
                        <Input
                        type="text"
                        name="hobbies"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input
                        type="text"
                        name="image"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        name="submit"
                        onClick={this.handleSubmit}
                        >Add Profile
                    </Button>
                    { this.state.submitted && <Redirect to="/catindex"/>}
                </Form>
        )
    }
}
export default CatNew