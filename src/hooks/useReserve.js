import { db } from '../config/firebaseConfig'
import { useState, useEffect } from 'react'
import { onValue, ref } from 'firebase/database'

export const useReserve = () => {
    const [reservations, setReservations] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const reservationsRef = ref(db, 'Reservations');

        onValue(reservationsRef, (snapshot) => {
            const reservationsData = snapshot.val();
            if (reservationsData) {
                setReservations(reservationsData);
            }
            setLoading(false)
        });
    }, []);

    return (
        { reservations, loading }
    )
}