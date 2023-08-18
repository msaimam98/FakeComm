import { createContext, useState } from 'react';
import BookImg from '../assets/imgs/book.jpg'
import ComputerImg from '../assets/imgs/computer.jpg'
import CarImg from '../assets/imgs/car.jpg'
import BananaImg from '../assets/imgs/banana.jpg'

const AuthContext = createContext();

export default AuthContext;




export const AuthProvider = ({children}) => { 

    // all global variables need to be here 
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(false);
    const [allProducts, setAllProducts] = useState([])


    const initialItemTracker = {
        "Book": 0,
        "Banana": 0,
        "Car": 0,
        "Computer": 0,
    }

    const [itemTracker, setItemTracker] = useState(initialItemTracker)



    let contextData = {
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        user: user, 
        setUser: setUser,
        allProducts: allProducts,
        setAllProducts: setAllProducts,
        itemTracker: itemTracker, 
        setItemTracker: setItemTracker,


    }


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

