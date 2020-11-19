import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../store/action/action";

const GoogleAuth = (props) => {
  const auth = useRef(null);

  const onAuthChange = (isSignIn) => {
    if (isSignIn) {
      const googleUserId = auth.current.currentUser.get().getId();
      props.signIn(isSignIn, googleUserId);
    } else {
      props.signOut(isSignIn);
    }
  };

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "545387985256-93higqcspqmaftip465j2520ktgqvck9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          // setIsSignIn({ isSignIn: auth.current.isSignedIn.get() });
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(() => {
            onAuthChange(auth.current.isSignedIn.get());
          });
        });
    });
  }, []);

  return (
    <div>
      {props.status ? (
        <div>
          {/* <h2>Already signIn</h2> */}
          <i className="user circle huge icon"></i>
          <button className="ui google plus button" onClick={() => auth.current && auth.current.signOut()}>
            <i className="google plus icon"></i>
            Google SignOut
          </button>
          {/* <button onClick={() => auth.current && auth.current.signOut()}>SignOut</button> */}
        </div>
      ) : (
        <div>
          <button className="ui google plus button" onClick={() => auth.current && auth.current.signIn()}>
            <i className="google plus icon"></i>
            Google signIn
          </button>
          {/* <button onClick={() => auth.current && auth.current.signIn()}>SignIn</button> */}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.subReducer.status,
    userId: state.subReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (status, userId) => dispatch(signIn(status, userId)),
    signOut: (status) => dispatch(signOut(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);

// class GoogleAuth extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isSignIn: null,
//     };
//   }

//   onAuthChange = () => {
//     this.setState({ isSignIn: this.auth.isSignedIn.get() });
//   };

//   componentDidMount() {
//     window.gapi.load("client:auth2", () => {
//       window.gapi.client
//         .init({
//           clientId: "545387985256-93higqcspqmaftip465j2520ktgqvck9.apps.googleusercontent.com",
//           scope: "email",
//         })
//         .then(() => {
//           this.auth = window.gapi.auth2.getAuthInstance();
//           this.setState({ isSignIn: this.auth.isSignedIn.get() });
//           this.auth.isSignedIn.listen(this.onAuthChange);
//         });
//     });
//   }

//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         {this.state.isSignIn ? (
//           <div>
//             <h2>Already signIn</h2>
//             <button>Logout</button>
//           </div>
//         ) : (
//           <div>signIn</div>
//         )}
//       </div>
//     );
//   }
// }
