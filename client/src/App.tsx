import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './config/Routes';
import Modal from './components/atomic/Modal';
import { useRecoilState } from 'recoil';
import { authState } from './state/auth';
import apiClient from './config/apiClient';
import { ApiResponse } from './types/genericResponse';
import { errorToast } from './utils/errorToast';

const App = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [userData] = useRecoilState(authState);

    const toggleModal = () => {
        setShowPopup(!showPopup);
    };

    useEffect(() => {
        if (userData?.isDemoUser && userData.demoTime !== '7 days') return;
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 60000);
        console.log('Demo time');

        return () => clearTimeout(timer);
    }, [userData]);

    const updateTrial = async () => {
        try {
            console.log(userData);
            const res: ApiResponse<any> = await apiClient.post(
                `/trial/update-trial/${userData._id}`,
                {
                    id: userData.id,
                }
            );

            if (res.code === 200) {
                console.log('Trial updated successfully');
            } else {
                errorToast(res.message);
            }
        } catch (error) {
            errorToast('Error during update trial');
            console.error('Error during update trial:', error);
        }
    };
    return (
        <Router>
            <Modal
                isModalOpen={showPopup}
                toggleModal={toggleModal}
                onSave={updateTrial}
                body="Get a 7 day trial of Wayne E Solutions"
            />
            <AppRoutes />
        </Router>
    );
};

export default App;
