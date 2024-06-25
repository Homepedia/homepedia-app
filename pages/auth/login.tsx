import { Input } from "@/components/ui/input";
import AuthLayout from "@/layouts/auth";

export default function Login() {
    return (
        <AuthLayout title="Log in">
            <Input type="text" />
        </AuthLayout>
    );
}
