import type { Dispatch, SetStateAction } from 'react';
import { useEnv } from '@/hooks/useEnv';
import type { ApiResponse } from '@/types/repositories/ApiResponse';
import { RequestError } from '@/classes/RequestError';
import { useRouter } from 'next/router';
import { RouteEnum } from '@/enums/RouteEnum';
import { ErrorCodeEnum } from '@/enums/ErrorCodeEnum';

export const useRepository = (setPendingValue: Dispatch<SetStateAction<boolean>>) => {
    const router = useRouter();

    return {
        async request<T>(url: string, options: Omit<RequestInit, 'body'> & { body?: Record<string, unknown>; query?: Record<string, string> } = {}): Promise<T> {
            setPendingValue(true);
            const env = useEnv();

            try {
                const { query, body, ...baseOptions } = options;
                const path = new URL(`${env.NEXT_PUBLIC_API_URL}${url}`);
                path.search = new URLSearchParams(options.query).toString();

                const response = await fetch(path.href, {
                    credentials: 'include',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    ...baseOptions
                });

                const dataText = await response.text();
                if (!dataText.length) return {} as T;
                const data = JSON.parse(dataText) as ApiResponse;
                if (response.status >= 400) throw new RequestError(data.errorCode, data.message, response.status);
                setPendingValue(false);
                return data as T;
            } catch (error) {
                setPendingValue(false);
                if (error instanceof RequestError) {
                    if (error.statusCode === 401) await router.push(RouteEnum.LOGIN);
                    throw new RequestError(error.errorCode, error.message, error.statusCode);
                }
                throw new RequestError(ErrorCodeEnum.UNKNOWN, '', 500);
            }
        }
    };
};
