import { Spinner } from "react-bootstrap";


function Loading(){
    return ( 
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner style={{ color: '#959393 ' }} />
        </div>
    )
}

export default Loading;