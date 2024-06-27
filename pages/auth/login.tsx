import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormInput,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { useAuthRepository } from '@/hooks/repositories/useAuthRepository';
import { useState } from 'react';
import { RequestError } from '@/classes/RequestError';
import { Loader } from '@/components/ui/loader';

const formSchema = z.object({
    username: z.string().trim().min(1, 'Username is required'),
    password: z.string().trim().min(1, 'Password is required')
});

export default function Login() {
    const [pendingLogin, setPendingLogin] = useState(false);
    const authRepository = useAuthRepository(setPendingLogin);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: ''
        },
        mode: 'all'
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (pendingLogin) return;

        const { username, password } = values;
        try {
            const user = await authRepository.login(username, password);
            console.log({ user });
        } catch (e) {
            if (e instanceof RequestError) {
                console.log({ error: e.stack });
            }
        }
    }

    return (
        <AuthLayout title="Log in">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-stretch">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl><FormInput {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl><FormInput type="password" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    />
                    <Button type="submit">Log in {pendingLogin && <Loader size='23' />}</Button>
                </form>
            </Form>
        </AuthLayout>
    );
}
