export const useEnv = () => {
    return {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL as string
    };
};
