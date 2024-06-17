const NavLink = ({ url, text }) => {
  const path = window.location.pathname;

  return (
    <li className="text-grey-50 text-xl">
      <a
        href={url}
        className={`
        hover:text-white
        ${path === url && "custom-underline"}
        `}
      >
        {text}
      </a>
    </li>
  );
};

export default NavLink;
