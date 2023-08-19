import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Link, Button, Image } from "@nextui-org/react";
import Registro from "../Registro/Registro";

import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const location = useLocation();

  const mostarSearchBar = location.pathname === "/home";

  const [modalabierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const CerrarModal = () => {
    setModalAbierto(false);
  };

  //Por aqui unos cambios

  return (
    <div class="flex flex-col justify-center flex flex-col border-b shadow-lg my-2">
      <div class="flex justify-between ... ... gap-4 flex flex-row ...">
        <div class="ml-2 ... ">
          <Image
            width={100}
            height={100}
            alt="NextUI hero Image"
            // src="../../assets/LogoPrueba.jpg"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          {/* <img src="../../assets/LogoPrueba.jpg" alt="Imagen" /> */}
          {/* <h1>Huellitas de amor</h1> */}
        </div>

        <div class=" gap-20 flex flex-row text-black">
          <Link to="/home">Inicio</Link>
          <Link to="/perfil">Mi Perfil</Link>
          <Link to="/notificaciones" onClick={abrirModal}>
            Notificaciones
          </Link>

          {/* <div class="mt-3 ml-2  ...">
            <Link to="/agregar">
              <Button color="primary">Crear Nueva Mascota</Button>
            </Link>
          </div> */}
        </div>

        {/* <div className={styles.agregar}>
          <Link to="/agregar">Agrega tu Mascota</Link>
        </div> */}

        <div class="gap-4 flex flex-row ... mr-4 ...">
          <Link to="/registro">
            <Button color="primary" variant="bordered">
              Registrarse
            </Button>
          </Link>
          <Link to="/login">
            <Button color="primary" variant="solid">
              Iniciar sesión
            </Button>
          </Link>
        </div>
      </div>

      <div class="flex justify-center">
        {mostarSearchBar && (
          <div class="flex justify-center w-96 my-2">
            <SearchBar />
          </div>
        )}
      </div>

      {modalabierto && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.notih2}>Notificaciones</h2>
            <ul class={styles.notificationlist}>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notificationinfo}>
                    <span class={styles.notificationtitle}>
                      Nueva notificación 1
                    </span>
                    <br />
                    <span class={styles.notificationtime}>Hace 1 hora</span>
                  </div>
                  <button class={styles.notificationaction}>Ver</button>
                </div>
              </li>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notificationinfo}>
                    <span class={styles.notificationtitle}>
                      Nueva notificación 2
                    </span>
                    <br />
                    <span class={styles.notificationtime}>Hace 3 hora</span>
                  </div>
                  <button class={styles.notificationaction}>Ver</button>
                </div>
              </li>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notificationinfo}>
                    <span class={styles.notificationtitle}>
                      Nueva notificación 3
                    </span>
                    <br />
                    <span class={styles.notificationtime}>Hace 5 hora</span>
                  </div>
                  <button class={styles.notificationaction}>Ver</button>
                </div>
              </li>
            </ul>
            <button className={styles.close} onClick={CerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
// import { useSelector, useDispatch } from "react-redux";
// import styles from "./nav.module.css";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// // import {AcmeLogo} from "./AcmeLogo.jsx";

// export default function Nav() {
//   const location = useLocation();
//   const mostarSearchBar = location.pathname === "/home";
//   const [modalabierto, setModalAbierto] = useState(false);

//   const abrirModal = () => {
//     setModalAbierto(true);
//   };

//   const CerrarModal = () => {
//     setModalAbierto(false);
//   };

//   return (
//     <>
//       <div class="flex flex-col...">
//         <Navbar class="flex flex-col">
//           <NavbarBrand>
//             {/* <AcmeLogo /> */}
//             <div>
//               <img src="../../assets/LogoPrueba.jpg" alt="Imagen" />
//             </div>
//             <p className="font-bold text-inherit">ACME</p>
//           </NavbarBrand>

//           <div>
//             <NavbarContent
//               class="flex flex-col"
//               className="hidden sm:flex gap-4"
//               justify="center"
//             >
//               <NavbarItem>
//                 <Link color="foreground" href="/home">
//                   Inicio
//                 </Link>
//               </NavbarItem>
//               <NavbarItem isActive>
//                 <Link color="foreground" aria-current="page" href="/perfil">
//                   Perfil
//                 </Link>
//               </NavbarItem>
//               <NavbarItem>
//                 <Link
//                   color="foreground"
//                   href="/notificaciones"
//                   onClick={abrirModal}
//                 >
//                   Notificaciones
//                 </Link>
//               </NavbarItem>
//             </NavbarContent>
//           </div>

//           <div class="flex flex-col">
//             <NavbarContent class="flex flex-col" justify="end">
//               <NavbarItem className="hidden lg:flex">
//                 <Link color="foreground" href="#">
//                   <Button variant="bordered">Registrarse</Button>
//                 </Link>
//               </NavbarItem>

//               <NavbarItem>
//                 <Link color="foreground">
//                   <Button
//                     as={Link}
//                     color="foreground"
//                     href="#"
//                     variant="bordered"
//                   >
//                     Iniciar Sesión
//                   </Button>
//                 </Link>
//               </NavbarItem>
//             </NavbarContent>
//           </div>

//           <div>
//             <NavbarContent justify="">
//               <NavbarItem className="hidden lg:flex">
//                 {mostarSearchBar && (
//                   <div>
//                     <SearchBar />
//                   </div>
//                 )}
//               </NavbarItem>
//             </NavbarContent>
//           </div>

//           {/* <div>
//           {mostarSearchBar && (
//             <div>
//               <SearchBar />
//             </div>
//           )}
//         </div> */}

//           {modalabierto && (
//             <div>
//               <div>
//                 <h2>Notificaciones</h2>
//                 <ul>
//                   <li>
//                     <div>
//                       <div>
//                         <span>Nueva notificación 1</span>
//                         <br />
//                         <span>Hace 1 hora</span>
//                       </div>
//                       <button>Ver</button>
//                     </div>
//                   </li>
//                   <li>
//                     <div>
//                       <div>
//                         <span>Nueva notificación 2</span>
//                         <br />
//                         <span>Hace 3 hora</span>
//                       </div>
//                       <button>Ver</button>
//                     </div>
//                   </li>
//                   <li>
//                     <div>
//                       <div>
//                         <span>Nueva notificación 3</span>
//                         <br />
//                         <span>Hace 5 hora</span>
//                       </div>
//                       <button>Ver</button>
//                     </div>
//                   </li>
//                 </ul>
//                 <button onClick={CerrarModal}>Cerrar</button>
//               </div>
//             </div>
//           )}
//         </Navbar>
//       </div>
//     </>
//   );
// }
