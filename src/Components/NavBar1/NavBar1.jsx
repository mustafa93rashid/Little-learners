import "./NavBar1.css";

const NavBar1 = () => {
  return (
    <nav className="px-50">
      
      {/* Main container for the announcement bar */}
      <div className="MR-nav1Container ">

        {/* Admission announcement text */}
        <p className="fs-20">Admission is Open, Grab your seat now</p>

        {/* Icon next to the announcement text */}
        <img src="/Navbar/Icon.svg" alt="" />

        {/* Decorative shape positioned at the top left */}
        <img
          className="MR-nav1Shape1"
          src="/Navbar/Abstract Design.svg"
          alt=""
        />
        <img
          className="MR-nav1Shape2"
          src="/Navbar/Abstract Design (1).svg"
          alt=""
        />
        <img
          className="MR-nav1Shape3"
          src="/Navbar/Abstract Design (2).png"
          alt=""
        />
        <img
          className="MR-nav1Shape4"
          src="/Navbar/Abstract Design (3).png"
          alt=""
        />
      </div>
    </nav>
  );
};

export default NavBar1;
