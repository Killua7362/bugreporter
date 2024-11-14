'use client';
import { SidebarContent as SidebarContentFrame } from '@/components/ui/sidebar';
import { SidebarContentItem } from './content-item';
import { usePathname } from 'next/navigation';

const names = {
  '/dashboard/home': 'Dashboard',
  '/dashboard/settings': 'Settings',
};

export function SidebarContent() {
  const pathname = usePathname();

  return (
    <SidebarContentFrame>
      <ul className="flex h-full w-full flex-col items-center">
        {Object.entries(names).map(([path, name], index) => (
          <SidebarContentItem
            key={index}
            name={name}
            active={pathname === path}
          />
        ))}
      </ul>
    </SidebarContentFrame>
  );
}
