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

const formSchema = z.object({
    email: z.string().trim().min(1, 'Email address is required').email('Email address is invalid'),
    username: z.string().trim().min(1, 'Username is required'),
    password: z.string().trim().min(1, 'Password is required'),
    confirmPassword: z.string().trim().min(1, 'Password confirmation is required')
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'Passwords does not match',
            path: ['confirmPassword']
        });
    }
});

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        mode: 'all'
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log({ submit: values });
    }

    return (
        <AuthLayout title="Sign up">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-stretch">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl><FormInput {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    />
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) =>
                            <FormItem>
                                <FormLabel>Password confirmation</FormLabel>
                                <FormControl><FormInput type="password" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    />
                    <Button type="submit">Sign up</Button>
                </form>
            </Form>
        </AuthLayout>
    );
}
