import React from "react";

import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../assets/img/theme/img-1-1200x1000.jpg"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("../assets/img/theme/img-2-1200x1000.jpg"),
    altText: '',
    caption: '',
    header: ''
  }
];

class Carousels extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={items} />
      </>
    );
  }
}

export default Carousels;
