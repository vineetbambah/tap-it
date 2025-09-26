import TableContainer from "./components/table-container"
import MobileNav from "./components/mobile-nav";
export default function Home() {

  return (
    <div className="">
      <TableContainer/>
      <div className={`md:hidden`}><MobileNav /></div>
    </div>
  );
}
