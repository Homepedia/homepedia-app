import type { Dispatch, SetStateAction } from 'react';
import { useRepository } from '@/hooks/repositories/useRepository';
import type { Login } from '@/types/repositories/auth/Login';
import type { User } from '@/types/repositories/auth/User';

export const useAuthRepository = (setPendingValue: Dispatch<SetStateAction<boolean>>) => {
    const repository = useRepository(setPendingValue);

    return {
        async login(email: string, password: string) {
            return await repository.request<Login>('/login', {
                body: { email, password },
                method: 'POST'
            });
        },
        async register(email: string, username: string, password: string, confirmPassword: string) {
            await repository.request('/register', {
                body: { email, username, password, confirmPassword },
                method: 'POST'
            });
        },
        async isTokenValid(token: string) {
            return await repository.request<User>('/is-valid-token', {
                method: 'GET',
                query: {
                    token
                }
            });
        }
    };
};
