import { faBug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SideBarHeader() {
  return (
    <header className="flex h-[6.5rem] w-full items-center justify-center gap-x-[0.625rem] border-b-[1px] border-white/30 p-[1.25rem]">
      <FontAwesomeIcon
        icon={faBug}
        height={0}
        width={0}
        style={{
          color: '#0466C8',
          minHeight: '30px',
          minWidth: '30px',
        }}
      />
      <h1 className="uppercase">
        Bug <br /> Reporter
      </h1>
    </header>
  );
}
