import { cn } from '@/lib/utils';

export function SidebarContentItem({
  name,
  active,
}: {
  name: string;
  active: boolean;
}) {
  return (
    <li
      className={cn(
        'grid h-[3.125rem] w-full items-center px-8 py-4 text-[1rem] text-sidebar-accent-foreground transition-colors',
        active
          ? 'bg-accent text-[black]'
          : 'bg-sidebar-background text-[white] hover:cursor-pointer hover:bg-accent/20'
      )}
    >
      <div className="h-fit w-fit">{name}</div>
    </li>
  );
}
