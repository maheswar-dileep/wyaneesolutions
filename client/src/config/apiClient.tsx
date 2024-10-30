import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_BASE_URL;
console.log('🚀 ~ baseURL:', baseURL);

const apiClient = axios.create({
    baseURL,
});

apiClient.interceptors.request.use(
    (config) => {
        const excludedRoutes = [
            '/auth/login',
            '/auth/register',
            '/auth/refresh-token',
        ];

        if (!excludedRoutes.includes(config.url ?? '')) {
            const accessToken = localStorage.getItem('token')
                ? JSON.parse(localStorage.getItem('token') ?? '')
                : null;
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const { data } = await axios.post(`${baseURL}/refresh-token`, {
                    token: refreshToken,
                });
                localStorage.setItem('token', JSON.stringify(data.accessToken));
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

                return apiClient(originalRequest);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (refreshError) {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
            }
        }
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
