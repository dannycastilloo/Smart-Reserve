import { db } from '../config/firebaseConfig'
import { useState, useEffect } from 'react'
import { onValue, ref, update, push, remove } from 'firebase/database'

export const useReserve = () => {
    const [reservations, setReservations] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const reservationsRef = ref(db, 'PastReserves');

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

export const confirmReservation = (reservation) => {
    const reservationRef = ref(db, `Reserves/${reservation.key}`);
    update(reservationRef, { State: 'Aceptada' });
};

export const rejectReservation = (reservation) => {
    const reservationRef = ref(db, `Reserves/${reservation.key}`);
    update(reservationRef, { State: 'Rechazada', Active: 0 });

    const pastReservesRef = ref(db, 'PastReserves');
    push(pastReservesRef, reservation);

    remove(reservationRef);
};