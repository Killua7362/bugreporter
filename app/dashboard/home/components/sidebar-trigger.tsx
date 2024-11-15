'use client';

import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export default function SidebarTrigger(): JSX.Element {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      onClick={toggleSidebar}
      className="flex h-full w-16 items-center justify-center rounded-md border border-white/30 bg-primary shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)] transition-colors hover:cursor-pointer hover:bg-accent/20"
    >
      <FontAwesomeIcon
        icon={faAlignJustify}
        className="h-fit min-h-5 w-fit min-w-5 bg-primary"
        style={{ color: 'hsl(210,59%,52%)' }}
      />
    </Button>
  );
}
