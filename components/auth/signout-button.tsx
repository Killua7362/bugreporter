import { signOutAction } from './action';

export function SignOut() {
  return (
    <form action={signOutAction}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
