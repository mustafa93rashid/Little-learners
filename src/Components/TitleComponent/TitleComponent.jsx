import "./TitleComponent.css";

const TitleComponent = ({ title, descrption, btnContnet, className}) => {
  return (
    <div className={`mb-100 MR-titleSection mt-200 ${className}`}>
      {/* Small button-like text above the title */}
      <span className="fs-18">{btnContnet}</span>

      {/* Main title of the section */}
      <h3 className="fs-58 Mr-Title">{title}</h3>

      {/* Descriptive paragraph below the title */}
      <p className="fs-20 Mr-pargraph">{descrption}</p>
    </div>
  );
};

export default TitleComponent;
