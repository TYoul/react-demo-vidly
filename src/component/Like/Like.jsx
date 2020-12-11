import React, {Component} from "react";

export default class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {movie,liked,onLiked} = this.props;
    return (
      <i className={liked ? "fa fa-heart" : "fa fa-heart-o"}
         style={{cursor:"pointer"}}
         aria-hidden="true"
         onClick={e => onLiked(movie)}
      />
    )
  }
}