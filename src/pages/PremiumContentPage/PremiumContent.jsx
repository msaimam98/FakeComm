// import React from 'react'
// import { Auth } from 'aws-amplify';
// import { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';

// const PremiumContent = () => {
//     const [token, setToken] = useState();
//     const [formData, setFormData] = useState({});

//     const getToken = async () => {
//         try {
//             const session = await Auth.currentSession(); 
//             const idToken = session.getIdToken().getJwtToken();
//             setToken(idToken)
//             console.log("ID Token:", idToken);
    
    
//         } catch (error) {
//             setToken(0)
//         }
//     };

//     useEffect(() => {
        
//         getToken()


//     }, [formData]);


//     const handleSeeingProtected = () => {

//     }
//   return (
//     <div className='d-flex justify-content-center align-items-center m-5 flex-column'>
        
//                 <div className='m-2'> Only for Signed In Users! </div>
//     </div>
//   )
// }

// export default PremiumContent

import React from 'react';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '../../context/context';

const PremiumContent = () => {
    const [token, setToken] = useState(null);
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);
    const {isAuthenticated} = useContext(AuthContext)

    const getToken = async () => {
        try {
            const session = await Auth.currentSession(); 
            const idToken = session.getIdToken().getJwtToken();
            setToken(idToken);
            console.log("ID Token:", idToken);
        } catch (error) {
            setError("Please log in to access premium content.");
        }
    };

    const handleSeeingProtected = async () => {
        try {
            const response = await fetch('https://ypyxvyh1x4.execute-api.us-east-2.amazonaws.com/prod/premium', {
                headers: {
                    'Authorization': token
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch premium content.');
            }

            const data = await response.json();
            setContent(data);
        } catch (error) {
            // setError(error.message);
        }
    };

    useEffect(() => {
        
        getToken();

    }, [isAuthenticated]);

    return (
        <div className='d-flex justify-content-center align-items-center m-5 flex-column g-4'>
            {content ? (
                <div><p>{content}</p></div>
            ) : (
                <>
                    {error ? <div className='m-2'>{error}</div> : null}
                    <Button onClick={handleSeeingProtected}>See Premium Content</Button>
                </>
            )}
        </div>
    );
}

export default PremiumContent;

