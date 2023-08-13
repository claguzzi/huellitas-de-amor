import React, { useState } from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  const location = useLocation();
  const [modalabierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const CerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <div className={styles.divnav}>
      <div className={styles.divlogo}>
        {/* <img src="../../assets/LogoPrueba.jpg" alt="Imagen" /> */}
        {/* <h1>Huellitas de amor</h1> */}
      </div>
      <div className={styles.nav}>

        <Link to="/home">Inicio</Link>
        <Link to="/perfil">Mi Perfil</Link>
        <Link to="/detail">Detalle</Link>
        <Link to="/notificaciones" onClick={abrirModal}>
          Notificaciones
        </Link>

        {/* <button onClick={abrirModal}>Notificaciones</button> */}
      </div>
      <div className={styles.divlogin}>
        <Link to="/login">Iniciar sesion</Link>
      </div>

      <div>
        {location.pathname === "/home" && (
          <div>
            <h3>Aqui renderizo el searchbar</h3>
            {/* <SearchBar /> */}
            {/* <input value="text" type="name" placeholder="Buscar..." />
          <button className={styles.agregar}>Agregar</button> */}
          </div>
        )}
      </div>

      {modalabierto && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Notificaciones</h2>
            <ul class={styles.notification_list}>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notification_info}>
                    <span class={styles.notification_title}>
                      Nueva notificación 1
                    </span>
                    <span class={styles.notification_time}>Hace 1 hora</span>
                  </div>
                  <button class={styles.notification_action}>Ver</button>
                </div>
              </li>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notification_info}>
                    <span class={styles.notification_title}>
                      Nueva notificación 2
                    </span>
                    <span class={styles.notification_time}>Hace 3 hora</span>
                  </div>
                  <button class={styles.notification_action}>Ver</button>
                </div>
              </li>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notification_info}>
                    <span class={styles.notification_title}>
                      Nueva notificación 3
                    </span>
                    <span class={styles.notification_time}>Hace 5 hora</span>
                  </div>
                  <button class={styles.notification_action}>Ver</button>
                </div>
              </li>
            </ul>
            <button onClick={CerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
