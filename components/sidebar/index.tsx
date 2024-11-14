import {
  SidebarProvider,
  Sidebar as SideBarFrame,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { SidebarContent } from './content';
import { SideBarHeader } from './header';

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SideBarFrame className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)]">
        <SidebarHeader className="p-0">
          <SideBarHeader />
        </SidebarHeader>
        <SidebarContent />
      </SideBarFrame>
      {children}
    </SidebarProvider>
  );
}
