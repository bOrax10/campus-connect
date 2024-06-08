import React, { useState } from "react";

const Certifications = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certifications = [
        {
            title: "Advancing Your Skills As an L&D Professional",
            preview: "", // No actual image path
            source: "IIT Guwahati",
            dateOfIssue: "Aug 23, 2022",
            tags: ["Software", "AI"]
        },
        {
            title: "Advancing Your Skills As an L&D Professional",
            preview: "", // No actual image path
            source: "IIT Guwahati",
            dateOfIssue: "Aug 23, 2022",
            tags: ["Software", "AI"]
        },
        {
            title: "Advancing Your Skills As an L&D Professional",
            preview: "", // No actual image path
            source: "IIT Guwahati",
            dateOfIssue: "Aug 23, 2022",
            tags: ["Software", "AI"]
        },
        {
            title: "Advancing Your Skills As an L&D Professional",
            preview: "", // No actual image path
            source: "IIT Guwahati",
            dateOfIssue: "Aug 23, 2022",
            tags: ["Software", "AI"]
        }
    ];

    const handleShowModal = (certificate) => {
        setSelectedCertificate(certificate);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCertificate(null);
    };

    return (
        <div>
            {certifications.map((certificate, index) => (
                <div key={index} className="m-2" onClick={() => handleShowModal(certificate)} style={{ cursor: 'pointer' }}>
                    <div className="d-flex">
                        <div className="col-4 rounded" style={{ backgroundColor: "grey" }}></div>
                        <div className="d-flex flex-column ms-3">
                            <b>{certificate.title}</b>
                            <p className="text-secondary my-0">{certificate.source}</p>
                            <p className="text-secondary">Issued {certificate.dateOfIssue}</p>
                            <div className="d-flex flex-wrap">
                                {certificate.tags.map((tag, indexx) => (
                                    <button key={indexx} className="btn btn-secondary me-2">{tag}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {index !== certifications.length - 1 &&
                        <hr />
                    }
                </div>
            ))}

            {selectedCertificate && (
                <div className={`modal fade ${showModal ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedCertificate.title}</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="rounded" style={{ width: '100%', height: '300px', backgroundColor: 'grey' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Certifications;
