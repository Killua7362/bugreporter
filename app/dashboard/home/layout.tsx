import Header from './components/header';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex w-full flex-col gap-y-2.5 p-5">
      <Header />
      {children}
    </div>
  );
}
