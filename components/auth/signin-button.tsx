import { signInAction } from './action';

export function SignIn() {
  return (
    <form action={signInAction}>
      <button type="submit">Sign in</button>
    </form>
  );
}
