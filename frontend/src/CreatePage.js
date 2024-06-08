import React from "react";
import OffCanvas from "./components/OffCanvas";
import Nav from "./components/Nav";
import RightOffCanvas from "./components/RightOffCanvas";
import PostContent from "./components/CreatePost";

const CreatePage = () => {
    return (
        <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
            <div className="col-lg-2 col-md-3">
                <OffCanvas />
            </div>
            <div className="d-flex flex-column col-10">
                <Nav/>
                <div className="d-flex flex-row">
                    <div className="col-lg-8 col-md-8">
                        <div className="d-flex flex-column justify-content-center ms-4 me-0">
                            <div className="card">
                                <div className="card-body">
                                    <PostContent/>
                                </div>
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
 
export default CreatePage;