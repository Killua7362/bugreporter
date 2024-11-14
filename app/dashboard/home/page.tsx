import TableFooter from './components/table-footer';
import TableMain from './components/table-main';
import TableToolbox from './components/table-toolbox';

export default function DashboardHome() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-[5px] bg-[#343436]">
      <TableToolbox />
      <TableMain />
      <TableFooter />
    </div>
  );
}
