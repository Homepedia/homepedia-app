export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <p>Auth layout</p>
            <main>{children}</main>
        </>
    )
}
