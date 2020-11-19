import React, { useEffect, useRef } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../store/action/action";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  buildPlayer() {
    if (this.player !== undefined || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  render() {
    return (
      <div>
        {this.props.stream.title ? (
          <div>
            <video ref={this.videoRef} style={{ width: "60%" }} controls />
            <h3>{this.props.stream.title}</h3>
            <p>{this.props.stream.discription}</p>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stream: state.streamReducer.stream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStream: (id) => dispatch(fetchStream(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);

// const StreamShow = (props) => {
//   console.log(props);
//   const videoRef = useRef(null);

//   console.log(videoRef.current);

//   useEffect(() => {
//     props.fetchStream(props.match.params.id);
//     const player = flv.createPlayer({
//       type: "flv",
//       url: `http://localhost:8000/live/${props.match.params.id}.flv`,
//     });

//     player.attachMediaElement(videoRef.current);
//     player.load();
//   }, []);

//   return (
//     <div>
//       {props.stream.title ? (
//         <div>
//           <video ref={videoRef} style={{ width: "100%" }} controls />
//           <h3>{props.stream.title}</h3>
//           <p>{props.stream.discription}</p>
//         </div>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     stream: state.streamReducer.stream,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchStream: (id) => dispatch(fetchStream(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
