import TopBarIcon from './top-bar-icon';
import SidebarTrigger from './sidebar-trigger';

export default function TopBar(): JSX.Element {
  return (
    <div className="flex h-16 w-full gap-x-4">
      <SidebarTrigger />
      <div className="flex h-full w-full items-center justify-end gap-x-8 rounded-md border border-white/30 bg-primary p-2.5 shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)]">
        <TopBarIcon />
      </div>
    </div>
  );
}
