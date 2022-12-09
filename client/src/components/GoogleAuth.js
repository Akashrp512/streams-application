import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};
componentDidMount() {
    window.gapi.load('client:auth2', ()=>{
        window.gapi.client.init({
            clientId: '1083187748811-upcgceoc2u7uc5p1j7olsm0ck47kuk30.apps.googleusercontent.com',
            scope: 'email',
            plugin_name: "Streams"
        }).then(()=>{
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({isSignedIn: this.auth.isSignedIn.get() })
            this.auth.isSignedIn.listen(this.onAuthChange);
        })
    });
};
onAuthChange =()=>{
   this.setState({isSignedIn: this.auth.isSignedIn.get()})
}

onSignInClick = () =>{
    this.auth.SignIn(); //issue with signIn
}

onSignOutClick = () =>{
    this.auth.signOut();
}

renderAuthButton() {
    if(this.state.isSignedIn === null) {
        return null;
    }else if(this.state.isSignedIn) {
     return (
     <button className='ui red google button' onClick={this.onSignOutClick}>
        <i className='google icon'/>
            Sign Out
     </button>
        )
    } else {
     return  (
     <button className='ui red google button' onClick={this.onSignInClick}>
     <i className='google icon'/>
         Sign In with Google
  </button>);
    }
}

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;