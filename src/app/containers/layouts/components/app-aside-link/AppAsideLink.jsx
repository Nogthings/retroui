import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const AppAsideLink = ({ icon, name, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex items-center bg-accent text-neutral gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:bg-blue-400 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
          : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
      }
      to={to}
    >
      {icon ? (
        <span className={`material-symbols-outlined flex-shrink-0`}>
          {icon}
        </span>
      ) : (
        <div className="w-6 h-6" />
      )}
      <span>{name}</span>
    </NavLink>
  );
};

AppAsideLink.propTypes = {
  icon: PropTypes.string, // El icono es opcional, por lo que puede ser un string o estar ausente
  name: PropTypes.string.isRequired, // El nombre del enlace es obligatorio y debe ser un string
  to: PropTypes.string.isRequired, //La ruta del enlace es obligatoria y debe ser un string
};

export default AppAsideLink;
