import React, {Component} from 'react'


 export default class Dashboard extends Component{


    render(){
        return(
            <div className="page-container">
            <div className="main-content">
                <div className="page-header">
                    <h2 className="header-title">Basic Table</h2>
                    <div className="header-sub-title">
                        <nav className="breadcrumb breadcrumb-dash">
                            <a href="#" className="breadcrumb-item"><i className="anticon anticon-home m-r-5"></i>Home</a>
                            <a className="breadcrumb-item" href="#">Tables</a>
                            <span className="breadcrumb-item active">Basic Table</span>
                        </nav>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>Basic Usage</h4>
                        <p>Using the most basic table markup, here’s how <code>.table</code>-based tables look in Bootstrap.</p>
                        <div className="m-t-25">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="code-example">
                            <pre><code className="language-markup">
                              </code></pre>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>Bordered table</h4>
                        <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
                        <div className="m-t-25">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>Hoverable rows</h4>
                        <p>Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p>                            
                        <div className="m-t-25">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                     
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>Small table</h4>
                        <p>Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.</p>                            
                        <div className="m-t-25">
                        <div className="m-t-25">
                            <div className="table-responsive">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            

            <footer className="footer">
                <div className="footer-content">
                    <p className="m-b-0">Copyright © 2019 Theme_Nate. All rights reserved.</p>
                    <span>
                        <a href="#" className="text-gray m-r-15">Term &amp; Conditions</a>
                        <a href="#" className="text-gray">Privacy &amp; Policy</a>
                    </span>
                </div>
            </footer>
           

         </div>

         </div>
        )
    }
 }