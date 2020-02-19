import React, {Component} from 'react'
import * as assets from '../../assets'
export default class Login extends Component{

    state = {
            username : "",
            password : "",
            rememberpassword : false,
    }


    handleChange = event => {
      const  isCheckbox = event.target.type === "checkbox";

        this.setState({
            [event.target.name] : isCheckbox
                ? event.target.checked
                : event.target.value
            
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        console.log(this.state)
    }


    render(){

        return(

            <div className="container-fluid p-0 h-100">
            <div className="row no-gutters h-100 full-height">
                <div className="col-lg-4 d-none d-lg-flex bg" style={{backgroundImage: `url(${assets.loginBackground})`}}>
                    <div className="d-flex h-100 p-h-40 p-v-15 flex-column justify-content-between">
                        <div>
                            <img src="assets/images/logo/logo-white.png" alt="" />
                        </div>
                        <div>
                            <h1 className="text-white m-b-20 font-weight-normal">Exploring Erick-Inventory</h1>
                            <p className="text-white font-size-16 lh-2 w-80 opacity-08">Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up.</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-white">© 2019 ThemeNate</span>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="text-white text-link" href="#">Legal</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-white text-link" href="#">Privacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 bg-white">
                    <div className="container h-100">
                        <div className="row no-gutters h-100 align-items-center">
                            <div className="col-md-8 col-lg-7 col-xl-6 mx-auto">
                                <h2>Sign In</h2>
                                <p className="m-b-30">Enter your credential to get access</p>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="font-weight-semibold">Username:</label>
                                        <div className="input-affix">
                                            <i className="prefix-icon anticon anticon-user"></i>
                                            <input required type="text" className="form-control" value={this.state.username} name="username" onChange={this.handleChange} placeholder="Username"/>
                                            <div className="valid-feedback">Looks good!</div>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-semibold">Password:</label>
                                        <a className="float-right font-size-13 text-muted" href="#">Forget Password?</a>
                                        <div className="input-affix m-b-10">
                                            <i className="prefix-icon anticon anticon-lock"></i>
                                            
                                            <input required type="password" className="form-control" value={this.state.password} name="password" onChange={this.handleChange} placeholder="Password"/>
                                            <div className="valid-feedback">Looks good!</div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex align-items-center justify-content-between">
                                            {/* <span className="font-size-13 text-muted">
                                                Don't have an account? 
                                                <a className="small" href="#"> Signup</a>
                                            </span> */}
                                            <button className="btn btn-primary">Sign In</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        )
    }
}