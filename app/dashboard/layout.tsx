import { Sidebar } from '@/components/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Sidebar>{children}</Sidebar>;
}
