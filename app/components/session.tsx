import Link from "next/link";
import { Session } from "next-auth";

interface IAuthComponent {
  session: Session | null;
}

export const AuthComponent: React.FC<IAuthComponent> = async ({ session }) => {
  return (
    <>
      {session ? (
        <>
          <div>
            <h1 className="text-center">Home Page</h1>
            <h2>Hi, {session.user?.name}</h2>
            <div className="flex justify-center">
              <Link href="/posts">All Posts</Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>You are not signed in</p>
          <p>
            <Link href="/api/auth/signin">Sign in</Link>
          </p>
        </>
      )}
    </>
  );
};
