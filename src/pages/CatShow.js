import { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class CatShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false,
    };
  }

  handleClick = () => {
    this.props.deleteCat(this.props.cat.id);
    this.setState({ isDeleted: true });
    console.log("Handle Click!");
  };

  render() {
    let { cat } = this.props;
    return (
      <>
        <Card className="card">
          <CardImg top width="100" src={cat.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Hi, my name is {cat.name}</CardTitle>
            <CardText>Age: {cat.age}</CardText>
            <CardText>Status: {cat.status}</CardText>
            <CardText>Looking For: {cat.looking_for}</CardText>
            <CardText>About Me: {cat.about_me}</CardText>
            <CardText>Hobbies: {cat.hobbies}</CardText>
            <NavLink to={`/catedit/${this.props.cat.id}`}>
              <Button>Update Cat</Button>
            </NavLink>
            <NavLink to={`/catindex`}>
              <Button onClick={() => this.props.deleteCat(cat.id)}>
                Delete Cat
              </Button>
            </NavLink>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default CatShow;
