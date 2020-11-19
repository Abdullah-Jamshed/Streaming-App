import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../store/action/action";
// import history from "../../history/history";
import Modal from "../Modal";

const StreamList = (props) => {
  // console.log("props ===>>>", props.currentUserId);

  // const actions = () => {
  //   return (
  //     <React.Fragment>
  //       <button className="ui button negative">Delete</button>
  //       <button className="ui button primary">cancel</button>
  //     </React.Fragment>
  //   );
  // };

  useEffect(() => {
    props.fetchStreams();
  }, []);

  return (
    <div className="">
      {/* <Modal title="Delete Stream" content="Are you sure you want to delete this stream?" actions={actions} onDismiss={() => history.push("/")} /> */}

      <h1>Stream List</h1>
      <div className="ui middle aligned divided list segment">
        {props.streams.map((stream) => {
          return (
            <div className="item" key={stream.id} style={{ padding: "15px" }}>
              <div className="right floated content">
                {stream.userId === props.currentUserId && (
                  <div className="ui">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                      Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                      Delete
                    </Link>
                  </div>
                )}
              </div>

              <i className="middle aligned video big icon"></i>
              <div className="content">
                <div className="header ">
                  <Link to={`/streams/${stream.id}`}>
                    <h2>{stream.title}</h2>
                  </Link>
                </div>
                <div className="description">
                  <p>{stream.discription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streamReducer.streams),
    currentUserId: state.subReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStreams: () => dispatch(fetchStreams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
