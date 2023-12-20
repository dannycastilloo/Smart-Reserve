import { db } from '../config/firebaseConfig'
import { useState, useEffect } from 'react'
import { onValue, ref, remove, getDatabase } from 'firebase/database'

export const useReserve = () => {

    const [reservations, setReservations] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getDatabase();
        const reservationsRef = ref(db, 'PastReserves');

        onValue(reservationsRef, (snapshot) => {
            const data = snapshot.val();
            setReservations(data || {});
            setLoading(false);
        });
    }, []);

    return (
        { reservations, loading }
    )
}

