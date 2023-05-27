import Container from "../Container";
import Logo from "./Logo";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between md:gap-0 gap-3 ">
            <Logo />
            <Search />
            <MenuDropDown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
