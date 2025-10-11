

const Menu = ({children,className}) => {
  return (
    <>
      <ul className={`flex gap-x-10 ${className}`}>{children}</ul>
    </>
  );
};

export default Menu;
