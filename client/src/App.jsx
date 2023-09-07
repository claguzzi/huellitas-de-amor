import "./App.css";
import { Routes, Route, useLocation, Navigate, Router } from "react-router-dom";
// import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
// import Perfil from "./components/PerfilUser/Perfiluser";
import Perfil from "./components/PerfilUser/Perfiluser";
import AgregarMascota from "./components/AgregarMascota/AgregarMascota";

import FilterMascotas from "./components/FilterButtons/FilterButtons";

import Detail from "./components/Detail/Detail";
import PathRoutes from "./helpers/Routes.helper";
import Footer from "./components/Footer/Footer";
import ModalLogSig from "./components/ModalLogSig/ModalLogSig";
import Registro from "./components/Registro/Registro";
import DashboardSuperAdmin from "./components/Dashboard/DashboardSuperAdmin/DashboardSuperAdmin";
import DetailUser from "./components/Dashboard/DetailUser";
import DetailHouse from "./components/Dashboard/detailHouse";
import CasaDeAdopcion from "./components/CasaDeAdopcion/CasaDeAdopcion";

import PetsSuper from "./components/Dashboard/DashboardSuperAdmin/PetsSuper";
import UsersSuper from "./components/Dashboard/DashboardSuperAdmin/UsersSuper";
import AdoptionHousesSuper from "./components/Dashboard/DashboardSuperAdmin/AdoptionHousesSuper";
import DonationsSuper from "./components/Dashboard/DashboardSuperAdmin/DonationsSuper";
import Notificaciones from "./components/Notificaciones/Notificaciones";
import DashboardAdmin from './components/Dashboard/DashboardAdmin/DashboardAdmin'
import AdoptionHousesAdmin from "./components/Dashboard/DashboardAdmin/AdoptionHousesAdmin";
import DonationsAdmin from './components/Dashboard/DashboardAdmin/DonationsAdmin'
import PetsAdmin from './components/Dashboard/DashboardAdmin/PetsAdmin'
import UsersAdmin from "./components/Dashboard/DashboardAdmin/UsersAdmin";
import DashboardHouses from './components/Dashboard/DashboardHouses/DashboardHouses'
import DonationsHouses from "./components/Dashboard/DashboardHouses/DonationsHouses";
import PetsHouses from "./components/Dashboard/DashboardHouses/PetsHouses";
import { useAuth } from "../../server/src/context/AuthContext";
import { AuthProvider } from "../../server/src/context/AuthContext";
import PrivateRoutes from "./PrivateRoutes";

// function PrivateRoute({ element }) {
//   const  user  = useAuth();
//   // const [isLoggedIn, setIsLoggedIn] = useState(false); // Ejemplo de estado de autenticación
//   console.log(user)
//   if (!user) {
//     // Si el usuario no está autenticado, redirige al inicio de sesión u otra página
//     return <Navigate to={PathRoutes.REGISTRO}/>;
//   }

//   return element;
// }
function App() {
  
  const location = useLocation();
  return (
    <>
      <AuthProvider>
        {location.pathname !== "/home" && <Nav />}
        <Routes>
          {/* <Route path={PathRoutes.LANDINGPAGE} element={<Landing />} /> */}
          <Route path={PathRoutes.HOME} element={<Home />} />
          <Route path={PathRoutes.FILTER} element={<FilterMascotas />} />
          <Route path={PathRoutes.PERFIL} element={<Perfil />} />

          <Route path={PathRoutes.DETAIL} element={<Detail />} />
          <Route path={PathRoutes.AGREGAR} element={<AgregarMascota />} />
          <Route path={PathRoutes.REGISTRO} element={<Registro />}></Route>
          {/* <Route path={PathRoutes.LOGIN} element={<Login />}></Route> */}

          <Route
            path={PathRoutes.CASADETAIL}
            element={<CasaDeAdopcion />}
          ></Route>
          {/* Componente dashboard  */}
          {/* <Route path={PathRoutes.DASHBOARD_SUPER_ADMIN} element={<DashboardSuperAdmin />} /> */}
          <Route
          path={PathRoutes.DASHBOARD_SUPER_ADMIN}
          element={<DashboardSuperAdmin />} />
          {/* Subruta de dashboard que gestiona las mascotas para ek admin */}
          <Route path={PathRoutes.DASHBOARD_SUPER_ADMIN_MASCOTAS} element={<PetsSuper />} />
          {/* Subruta de dashboard que gestiona los usuarios para el admin */}
          <Route path={PathRoutes.DASHBOARD_SUPER_ADMIN_USUARIOS} element={<UsersSuper />} />
          {/* Subruta de dashboard que gestiona las casas de adopcion para el admin */}
          <Route
            path={PathRoutes.DASHBOARD_SUPER_ADMIN_CASAS_DE_ADOPCION}
            element={<AdoptionHousesSuper />}
          />
          {/* Subruta de dashboard que gestiona las donaciones para el admin */}
          <Route
            path={PathRoutes.DASHBOARD_SUPER_ADMIN_DONACIONES}
            element={<DonationsSuper />}
          />
          <Route path={PathRoutes.DASHBOARD_ADMIN} element={<PrivateRoutes element={<DashboardAdmin />} />} />
          {/* <Route path={PathRoutes.DASHBOARD_ADMIN} element={<DashboardAdmin />} /> */}
          {/* Subruta de dashboard que gestiona las mascotas para ek admin */}
          <Route path={PathRoutes.DASHBOARD_ADMIN_MASCOTAS} element={<PetsAdmin />} />
          {/* Subruta de dashboard que gestiona los usuarios para el admin */}
          <Route path={PathRoutes.DASHBOARD_ADMIN_USUARIOS} element={<UsersAdmin />} />
          {/* Subruta de dashboard que gestiona las casas de adopcion para el admin */}
          <Route
            path={PathRoutes.DASHBOARD_ADMIN_CASAS_DE_ADOPCION}
            element={<AdoptionHousesAdmin />}
          />
          {/* Subruta de dashboard que gestiona las donaciones para el admin */}
          <Route
            path={PathRoutes.DASHBOARD_ADMIN_DONACIONES}
            element={<DonationsAdmin />}
          />

          <Route path={PathRoutes.DASHBOARD_HOUSES} element={<DashboardHouses />} />
          <Route path={PathRoutes.DASHBOARD_HOUSES_DONACIONES} element={<DonationsHouses />} />
          <Route path={PathRoutes.DASHBOARD_HOUSES_MASCOTAS} element={<PetsHouses />} />

          <Route path={PathRoutes.DETAILUSER} element={<DetailUser />} />
          <Route path={PathRoutes.DETAILHOUSE} element={<DetailHouse />} />
        </Routes>
        {/* <div>{location.pathname !== "/home" && <Footer />}</div> */}

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;

// import "./App.css";

// import { Routes, Route, useLocation } from "react-router-dom";
// import Landing from "./components/Landing/Landing";
// import Home from "./components/Home/Home";
// import Nav from "./components/Nav/Nav";
// import Perfil from "./components/PerfilUser/Perfiluser";
// import AgregarMascota from "./components/AgregarMascota/AgregarMascota";

// import FilterMascotas from "./components/FilterButtons/FilterButtons";

// import Detail from "./components/Detail/Detail";
// import PathRoutes from "./helpers/Routes.helper";
// import Footer from "./components/Footer/Footer";
// //Componente dashboard
// import Dashboard from "./components/Dashboard/Dashboard";
// //Componente dashboard gestiona mascotas
// import Pets from "./components/Dashboard/Pets";
// //Componente dashboard gestiona Usuarios
// import Users from './components/Dashboard/Users'
// //Componente dashboard gestiona casas de adopcion
// import AdoptionHouses from './components/Dashboard/AdoptionHouses'
// //Componente dashboard gestiona donaciones
// import Donations from './components/Dashboard/Donations'

// // import ModalLogSig from "./components/ModalLogSig/ModalLogSig";
// import { AuthProvider } from "./context/authContext";
// import Registro from "./components/Registro/Registro";

// function App() {
//   const location = useLocation();
//   return (
//     <>

//       <AuthProvider>
//         {location.pathname !== "/" && <Nav />}
//         <Routes>
//           <Route path={PathRoutes.LANDINGPAGE} element={<Landing />} />
//           <Route path={PathRoutes.HOME} element={<Home />} />
//           <Route path={PathRoutes.FILTER} element={<FilterMascotas />} />
//           <Route path={PathRoutes.PERFIL} element={<Perfil />} />
//           <Route path={PathRoutes.DETAIL} element={<Detail />} />
//           <Route path={PathRoutes.AGREGAR} element={<AgregarMascota />} />
//           <Route path={PathRoutes.REGISTER} element={<ModalLogSig />}></Route>
//           <Route Path={PathRoutes.REGISTRO} element={<Registro />}></Route>
//           {/* Componente dashboard  */}
//           <Route path={PathRoutes.DASHBOARD} element={<Dashboard/>}/>
//           {/* Subruta de dashboard que gestiona las mascotas para ek admin */}
//           <Route path={PathRoutes.DASHBOARD_MASCOTAS} element={<Pets/>}/>
//           {/* Subruta de dashboard que gestiona los usuarios para el admin */}
//           <Route path={PathRoutes.DASHBOARD_USUARIOS} element={<Users/>}/>
//           {/* Subruta de dashboard que gestiona las casas de adopcion para el admin */}
//           <Route path={PathRoutes.DASHBOARD_CASAS_DE_ADOPCION} element={<AdoptionHouses/>}/>
//           {/* Subruta de dashboard que gestiona las donaciones para el admin */}
//           <Route path={PathRoutes.DASHBOARD_DONACIONES} element={<Donations/>}/>
//             </Routes>
//           	<div>
// 				        {location.pathname !=='/home' && <Footer />}
// 			      </div>
//         </AuthProvider>
//       {/* <Footer /> */}
//     </>
//   );

// }

// export default App;
