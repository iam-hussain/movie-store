import React, { Component } from "react";

// reactstrap components
import { Col, Card, Button } from "reactstrap";

class ActorCard extends Component {
  render() {
    return (
      <>
        {this.props.personData.map(person => (
           <Col className=" mt-4" lg="4" key = {person.id}>
           <Card className="card-lift--hover bg-default shadow border-0">
             <blockquote className="card-blockquote">
               <h6 className="text-success text-uppercase font-weight-bold text-white">
                 {person.name}
               </h6>
               <ul className="list-unstyled mb-2">
                 <li>
                   <small className="text-muted  text-uppercase "> DOB : {person.dob}</small>
                 </li>
                 <li>
                   <small className="text-muted  text-uppercase "> Sex : {person.sex}</small>
                 </li>
               </ul>
               <p className="description mt-0 lead text-italic text-white">
                {person.biodata}
               </p>
               <Button
                  className="mt-1"
                  color={this.props.color}
                  href="#pablo"
                  onClick={() =>
                    this.props.onOpen({
                      modal: "actorModal",
                      data_id: person.id
                    })
                  }
                >
                  Update
                </Button>
               <Button
                 className="mt-1"
                 color={this.props.color}
                 href="#pablo"
                 onClick={e => e.preventDefault()}
               >
                 Delete
               </Button>
             </blockquote>
           </Card>
         </Col>
        ))}
      </>
    )
  }
}

export default ActorCard