import { ClipLoader } from "react-spinners";



export default function Spinner ({loading}){

    const override = {
        display: "block",
        margin: "100px auto",
    }
    
    
    return (
        <>
            <ClipLoader 
            color="#4338ca"
            loading={loading}
            cssOverride={override}
            size={150}
            />
        
        
        </>
    );
}