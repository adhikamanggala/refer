import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Cookies  from 'universal-cookie';
import { onUserLogin } from '../actions';

const cookies = new Cookies();

class LoginReact extends Component {

    componentWillReceiveProps(newProps) {
        if(newProps.username !== '') {
            cookies.set('dataUser', newProps.username, { path: '/' })// path:'/' gunanya agar cookie bisa di get di setiap page
        }   
    }

    onBtnLoginClick = () => {
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        this.props.onUserLogin({username, password})
    }
    
        render () {

            if(this.props.username === "") {

                if(this.props.error) {
                    var alert = <p align='center' style={{ fontSize: '14px' }}
                    className='alert alert-danger'>{this.props.error}</p>
                }

                var load;
                if(this.props.loading) {
                    load = <i className="fa fa-spinner fa-spin" style={{ fontSize: '14px' }}/>
                } else {
                    load =  
                    <input type="button" className="btn btn-primary" defaultValue="Log In"  onClick={this.onBtnLoginClick}/> 
                   
                }

                return (
                    
                    <div className="wrapper wrapper--w680">
                    <div className="card card-1">
                      <div className="card-heading" />
                      <div className="card-body">
                        <h2 className="title">Log In</h2>
                        <form method="POST">
                          <div className="input-group">
                            <input className="input--style-1" ref="username" type="text" name="name" id="name" placeholder="Your username" required />
                          </div>
                          <div className="input-group">
                            <input className="input--style-1" ref ="password" type="password" name="password" id="password" placeholder="Your password" required />
                          </div>
                          <div>
                              {alert}
                          </div>
                          <div className="p-t-20">
                            {/* <button className="btn btn--radius btn--green" type="submit">Submit</button> */}
                            {load}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                );
            }
        
        return <Redirect to="/"/>
        
    }
}


const mapStateToProps = (state) => {
    return { username: state.auth.username, error: state.auth.error };
}   

export default connect(mapStateToProps, { onUserLogin })(LoginReact);