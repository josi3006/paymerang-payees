import React, { useState }from "react";
import "../style.css";


const Modal = () => {



  const [Showmodal, setShowmodal] = useState(true);

  const closer = (e) => {
      e.preventDefault();
      setShowmodal(false);
  }

  var className = Showmodal ? "show" : "hide";

    return (

        <>


            <div className={`modal fade ${className}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">No Results</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => closer(e)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            No Payee names match your search criteria.  Please try again.
                            
      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-dismiss="modal" onClick={(e) => closer(e)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Modal;