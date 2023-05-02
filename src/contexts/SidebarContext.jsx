/* eslint-disable react/prop-types */
import {createContext, useState} from 'react';
import Sidebar from '../components/Sidebar';


export const SidebarContext = createContext(Sidebar)

const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <SidebarContext.Provider value={{
            isOpen, setIsOpen, handleClose
        }}>
            {children}
        </SidebarContext.Provider>

    )
}

export default SidebarProvider