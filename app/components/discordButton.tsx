import { signIn, signOut, useSession } from 'next-auth/react'

export default function DiscordButton() {
    const { data: session } = useSession()

    return (
        <div>
            {!session ? (
                <button onClick={() => signIn('discord')}>Sign in with Discord</button>
            ) : (
                <div>
                    <p>Welcome, {session.user?.name}</p>
                    <p>Email: {session.user?.email}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            )}
        </div>
    )
}
