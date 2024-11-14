import Header from './components/header';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex w-full flex-col gap-y-2.5 p-5 shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)]">
      <Header />
      {children}
    </div>
  );
}
