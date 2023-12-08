import { db } from '../config/firebaseConfig'
import { useState, useEffect } from 'react'
import { onValue, ref } from 'firebase/database'

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
        { computers, loading }
    )
}