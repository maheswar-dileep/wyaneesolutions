import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx';
import './index.css';

const clientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RecoilRoot>
            <GoogleOAuthProvider clientId={clientId}>
                <App />
            </GoogleOAuthProvider>
        </RecoilRoot>
    </StrictMode>
);
