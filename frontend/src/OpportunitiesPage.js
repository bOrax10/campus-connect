import React from "react";
import OffCanvas from "./components/OffCanvas";
import RightOffCanvas from "./components/RightOffCanvas";
import Nav from "./components/Nav";

const OpportunitiesPage = () => {
    const opportunities = [{
        'post': "Design Volunteer",
        'by': 'Consulting & Analytics Club',
        'avatar': './assets/cna.png',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, massa at interdum faucibus, nulla lorem consectetur ante, sit amet semper nulla risus in neque.',
        'postTime': '2 days'
    },{
        'post': "Design Volunteer",
        'by': 'Consulting & Analytics Club',
        'avatar': './assets/cna.png',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, massa at interdum faucibus, nulla lorem consectetur ante, sit amet semper nulla risus in neque.',
        'postTime': '2 days'
    }];

    return (
        <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
            <div className="col-lg-2 col-md-3">
                <OffCanvas />
            </div>

            <div className="d-flex flex-column col-10">
                <Nav/>

                <div className="d-flex flex-row">
                    <div className="col-lg-8 col-md-8">
                        <div className="card ms-4">
                            <div className="card-body">
                                <div className="card-title d-flex align-items-center">
                                    <h5>Browse Work Opportunities</h5>
                                    <button className="ms-auto btn btn-primary">+ Add Opportunity</button>
                                </div>
                                <hr className="mt-0"/>

                                {opportunities.map((opportunity, index) => (
                                    <div>
                                        <div className="d-flex">
                                            <div className="col-8 me-4">
                                                <div className="d-flex flex-column">
                                                    <div className='d-flex'>
                                                        <div className='avatar-container me-3' style={{backgroundColor: "grey", width: "10%"}}>
                                                        <img src={opportunity.avatar} alt="Avatar" />
                                                        </div>
                                                        <div className='d-flex flex-column'>
                                                            <h6 className="card-title">{opportunity.post}</h6>
                                                            <h6 className="card-subtitle mb-2 text-body-secondary">{opportunity.by}</h6>
                                                        </div>
                                                    </div>    
                                                    <small className='text-secondary mt-2'>{opportunity.description}</small>                              
                                                </div>
                                            </div>
                                            
                                            <div className="card d-flex flex-wrap flex-row ms-auto mt-2 align-items-center justify-content-center" style={{backgroundColor:"#ebf3ff", border: 'none'}}>
                                                <div className="card-body d-flex flex-column">
                                                    Expiring in
                                                    <p className='m-0'>{opportunity.postTime}</p>
                                                </div>
                                                <div className="m-2">
                                                    <button className='btn btn-light me-3'>Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                        {index!==opportunities.length-1 && <hr />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                        <RightOffCanvas />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OpportunitiesPage;