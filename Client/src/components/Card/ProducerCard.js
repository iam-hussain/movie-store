import React, { Component } from "react";

// reactstrap components
import { Col, Card, Button } from "reactstrap";
import withDeleteProducer from "../../Query/deleteProducer";

class PersonCard extends Component {

  
  async handleDelete(myID) {
    await this.props.delete({
      variables: {
        id: myID,
      }
    });
    await this.props.refetch()
  }

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
                  <br />
                   <small className="text-muted  text-uppercase "> Sex : {person.sex}</small>
                   <br />
                   
                   <small className="text-muted  text-uppercase "> Movie : 
                   {person && person.movie ? person.movie.map((moviesname, i) => (
                     i !== 0 ? " || " + moviesname.name : moviesname.name  
                   )) : <></>}
                   </small>
                   <br />
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
                      modal: "producerModal",
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
                 onClick={() => this.handleDelete(person.id)}
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

export default withDeleteProducer(PersonCard)