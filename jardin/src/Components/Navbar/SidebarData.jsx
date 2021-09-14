import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconName } from "react-icons/fa";
export const SidebarData = [
    {
        title: "Inicio",
        path: "/",
        icon:<AiIcons.AiFillHome/>,
        cName: "nav-text",
        view:true
    },
    {
        title: "Tablero",
        path: "/tablero",
        icon:<AiIcons.AiFillHome/>,
        cName: "nav-text",
        vie:false,

    },
    {
        title:"Momentos Especiales",
        path:"momentos_especiales",
        cName:"nav-text",
        view:true

    },
    {
        title: "Contacto",
        path: "/contacto",
        icon:<AiIcons.AiFillHome/>,
        cName: "nav-text",
        view:true

    },
    {
        title: "Inicio de Sesión",
        path: "/inicioSesion",
        icon:<AiIcons.AiFillHome/>,
        cName: "nav-text",
        vie:false,
    },
    {
        title: "Mi Perfíl",
        path: "/mi_perfil",
        icon:<AiIcons.AiFillHome/>,
        cName: "nav-text",
        view:true

    },
    {
        title: "Registro",
        path: "/registro",
        icon:<AiIcons.AiFillHome/>,
        cName: "nav-text",
        view:true

    },
    {
        title: "Cerrar Sesión",
        path: "/cerrarSesion",
        icon:<AiIcons.AiFillHome/>,
        cName: "nav-text",
        view:"special"

    },
  
]
