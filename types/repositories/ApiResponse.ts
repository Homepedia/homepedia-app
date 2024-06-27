import type { ErrorCodeEnum } from '@/enums/ErrorCodeEnum';

export type ApiResponse = {
    message?: string;
    errorCode?: ErrorCodeEnum;
}
