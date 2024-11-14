import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderIcon from './header-icon';

export default function Header(): JSX.Element {
  return (
    <div className="flex h-16 w-full gap-x-4">
      <div className="flex h-full w-16 items-center justify-center rounded-md border border-white/30 bg-primary">
        <FontAwesomeIcon
          icon={faAlignJustify}
          className="h-fit min-h-5 w-fit min-w-5 bg-primary"
          style={{ color: 'hsl(210,59%,52%)' }}
        />
      </div>
      <div className="flex h-full w-full items-center justify-end gap-x-8 rounded-md border border-white/30 bg-primary p-2.5">
        <HeaderIcon />
      </div>
    </div>
  );
}
