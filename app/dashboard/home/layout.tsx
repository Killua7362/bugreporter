import Header from './components/header';
import Main from './components/main';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex h-full w-full flex-col gap-y-2.5 p-5">
      <Header />
      <Main>{children}</Main>
    </div>
  );
}
