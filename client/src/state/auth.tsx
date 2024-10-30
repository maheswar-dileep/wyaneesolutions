import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const authState = atom({
    key: 'authState',
    default: {
        accessToken: '',
        refreshToken: '',
        username: '',
        email: '',
        role: '',
        id: '',
    },
    effects_UNSTABLE: [persistAtom],
});
