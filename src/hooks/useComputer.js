import { db } from '../config/firebaseConfig'
import { useState, useEffect } from 'react'
import { onValue, ref, remove, getDatabase } from 'firebase/database'

export const useComputer = () => {
    
    const [computers, setComputers] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const computersRef = ref(db, 'Computers');

        onValue(computersRef, (snapshot) => {
            const computersData = snapshot.val();
            if (computersData) {
                setComputers(computersData);
            }
            setLoading(false)
        });
    }, []);
    return (
        { computers, loading, deleteComputer }
    )
}

export const deleteComputer = async (id) => {
    const db = getDatabase();
    const computerRef = ref(db, 'Computers/' + id);
    try {
        await remove(computerRef);
        window.location.reload();
        console.log("Registro eliminado exitosamente");
    } catch (error) {
        console.error("Error al eliminar el registro: ", error);
    }
}