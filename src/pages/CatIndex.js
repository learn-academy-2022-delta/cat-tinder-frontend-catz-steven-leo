import { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class CatIndex extends Component {
  render() {
    return (
      <>
        <div className="page-body">
          <h2 className="center-heading">Find your purrfect match</h2>
          <div className="index-cards">
            <Row>
              {this.props.cats &&
                this.props.cats.map((cat) => {
                  return (
                    <Col sm={4}>
                      <Card key={cat.id}>
                        <CardImg
                          top
                          width="100%"
                          src={cat.image}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle>Name: {cat.name}</CardTitle>
                          <NavLink to={`/catshow/${cat.id}`}>
                            <Button>View Profile</Button>
                          </NavLink>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default CatIndex;
