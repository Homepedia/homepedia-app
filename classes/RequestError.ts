import { ErrorCodeEnum } from '@/enums/ErrorCodeEnum';

export class RequestError extends Error {
    public errorCode;
    public override message;
    public statusCode;

    public constructor(errorCode: ErrorCodeEnum | undefined, message: string | undefined, statusCode: number) {
        super();
        Object.setPrototypeOf(this, RequestError.prototype);
        this.errorCode = errorCode ?? ErrorCodeEnum.UNKNOWN;
        this.message = message ?? '';
        this.statusCode = statusCode;
    }
}
