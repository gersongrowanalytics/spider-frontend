import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
import AppsNavigation from "./AppsNavigation";
import './SideberContent.css'
import {funPermisosObtenidos} from 'funciones/funPermiso.js'
import {
    PERMISO_MODULO_CANAL_MODERNO,
    PERMISO_MODULO_CONVENIENCE_STORE,
    PERMISO_MODULO_ECOMMERCE,
    PERMISO_MODULO_TRADE_MARKETING,
    PERMISO_MODULO_SPIDER_DATA,
    PERMISO_MODULO_CANAL_TRADICIONAL,
    PERMISO_MODULO_CONTROL_ACCESOS,
    PERMISO_SUBMODULO_PERMISOS,
    PERMISO_SUBMODULO_TIPOS_USUARIOS,
} from "constants/PermisosTypes"

const MenuItemGroup = Menu.ItemGroup;

class SidebarItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItemCanalModerno     : false,
            menuItemConvenienceStore : false,
            menuItemEcommerce        : false,
            menuItemTradeMarketing   : false,
            menuItemSpiderData       : false,
            menuItemCanalTradicional : false,
            menuSubItemPermisos      : false,
            menuSubItemTiposUsuarios : false,

            seleccionoConvenienceStore : false,
            seleccionoCanalModerno     : false,
            seleccionoEcommerce        : false,
            seleccionoTradeMarketing   : false,
            seleccionoSpiderData       : false,
            seleccionoCanalTradicional : false,
            seleccionoSubItemPermisos  : false,
            seleccionoSubItemTiposUsuarios  : false,
        }
        this.funActivarHover = this.funActivarHover.bind(this)
        this.funSeleccionarMenu = this.funSeleccionarMenu.bind(this)
    }
    
    funActivarHover(nombre){
        this.setState({
            [nombre] : true
        })
    }

    funDesactivarHover(nombre, nombreSelecciono){
        
        if(this['state']['selecciono'+nombreSelecciono] == false){
            this.setState({
                [nombre] : false
            })
        }
    }

    funSeleccionarMenu(nombre, nombreSelecciono){
        this.setState({
            menuItemCanalModerno      : false,
            menuItemPromociones       : false,
            menuItemConvenienceStore  : false,
            menuItemEcommerce         : false,
            menuItemTradeMarketing    : false,
            menuItemSpiderData        : false,
            menuItemCanalTradicional  : false,
            menuSubItemPermisos       : false,
            menuSubItemTiposUsuarios  : false,

            seleccionoConvenienceStore  : false,
            seleccionoPromociones       : false,
            seleccionoCanalModerno      : false,
            seleccionoCarga             : false,
            seleccionoEcommerce         : false,
            seleccionoTradeMarketing    : false,
            seleccionoSpiderData        : false,
            seleccionoCanalTradicional  : false,
            seleccionoSubItemPermisos   : false,
            seleccionoSubItemTiposUsuarios   : false,
        })

        this.setState({
            [nombre]: true,
            ["selecciono"+nombreSelecciono] : true
        })
    }
  
    render() {
        return (
            <Menu
                defaultOpenKeys={[this.props.defaultOpenKeys]}
                selectedKeys={[this.props.selectedKeys]}
                theme={this.props.themeType === this.props.THEME_TYPE_LITE ? 'lite' : 'dark'}
                mode="inline">
                <MenuItemGroup key="main" className="gx-menu-group" title={null}>
                <Menu.Item key="#">
                    <img alt="" src={require("assets/images/iconos/ejecutivo.png")} style={{ marginRight:'15px' }} width="26px" />
                    {/* <span id="txtSidebarItem">{"Nombre de Ejecutivo"}</span> */}
                    <span id="txtSidebarItem">{localStorage.getItem('distribuidora')}</span>
                </Menu.Item>
                {/* {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_VENTAS,
                        <Menu.Item key="sistema/ventas" id="menuItemSidebar">
                            <Link to="/sistema/ventas" 
                                onMouseEnter={() => {this.funActivarHover('menuItemCanalModerno', 'Ventas')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemCanalModerno', 'Ventas')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemCanalModerno', 'Ventas')}}
                            >
                                <img alt="" src={require("assets/images/menuVentas.png")} style={{ marginRight:'15px' }} width="25px" />
                                <span 
                                    id={
                                        this.state.menuItemCanalModerno == true
                                        ? "txtSidebarItemHover"
                                        : "txtSidebarItem"
                                    }
                                >Canal Tradicional</span>
                            </Link>
                        </Menu.Item>
                    )
                } */}

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_CANAL_TRADICIONAL,
                        <Menu.Item key="sistema/canalTradicional/negocio" id="menuItemSidebar">
                            <Link to="/sistema/canalTradicional/negocio" 
                                onMouseEnter={() => {this.funActivarHover('menuItemCanalTradicional', 'CanalTradicional')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemCanalTradicional', 'CanalTradicional')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemCanalTradicional', 'CanalTradicional')}}
                            >
                                <img alt="" src={require("assets/images/iconos/canalTradicional.png")} style={{ marginRight:'15px' }} width="25px" />
                                <span 
                                    id={
                                        this.state.menuItemCanalTradicional == true
                                        ? "txtSidebarItemHover"
                                        : "txtSidebarItem"
                                    }
                                >Canal Tradicional</span>
                            </Link>
                        </Menu.Item>
                    )
                }

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_CANAL_MODERNO,
                        <Menu.Item key="sistema/canalModerno/infant-child" id="menuItemSidebar">
                            <Link to="/sistema/canalModerno/infant-child" 
                                onMouseEnter={() => {this.funActivarHover('menuItemCanalModerno', 'CanalModerno')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemCanalModerno', 'CanalModerno')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemCanalModerno', 'CanalModerno')}}
                            >
                                <img alt="" src={require("assets/images/iconos/canalModerno.png")} style={{ marginRight:'15px' }} width="25px" />
                                <span 
                                    id={
                                        this.state.menuItemCanalModerno == true
                                        ? "txtSidebarItemHover"
                                        : "txtSidebarItem"
                                    }
                                >Canal Moderno</span>
                            </Link>
                        </Menu.Item>
                    )
                }

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_CONVENIENCE_STORE,
                        <Menu.Item key="sistema/conveniencestore" id="menuItemSidebar">
                            <Link to="/sistema/conveniencestore" 
                                onMouseEnter={() => {this.funActivarHover('menuItemConvenienceStore', 'ConvenienceStore')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemConvenienceStore', 'ConvenienceStore')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemConvenienceStore', 'ConvenienceStore')}}
                            >
                                <img alt="" src={require("assets/images/iconos/convenience.png")} style={{ marginRight:'15px' }} width="25px" />
                                <span 
                                    id={
                                        this.state.menuItemConvenienceStore == true
                                        ? "txtSidebarItemHover"
                                        : "txtSidebarItem"
                                    }
                                >Convenience Store</span>
                            </Link>
                        </Menu.Item>
                    )
                }

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_ECOMMERCE,
                        <Menu.Item key="sistema/ecommerce" id="menuItemSidebar">
                            <Link to="/sistema/ecommerce" 
                                onMouseEnter={() => {this.funActivarHover('menuItemEcommerce', 'Ecommerce')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemEcommerce', 'Ecommerce')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemEcommerce', 'Ecommerce')}}
                            >
                                <img alt="" src={require("assets/images/iconos/ecommerce.png")} style={{ marginRight:'15px' }} width="25px" />
                                <span 
                                    id={
                                        this.state.menuItemEcommerce == true
                                        ? "txtSidebarItemHover"
                                        : "txtSidebarItem"
                                    }
                                >Ecommerce</span>
                            </Link>
                        </Menu.Item>
                    )
                }

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_TRADE_MARKETING,
                        <Menu.Item key="sistema/tradeMarketing" id="menuItemSidebar">
                            <Link to="/sistema/tradeMarketing" 
                                onMouseEnter={() => {this.funActivarHover('menuItemTradeMarketing', 'TradeMarketing')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemTradeMarketing', 'TradeMarketing')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemTradeMarketing', 'TradeMarketing')}}
                            >
                                <img alt="" src={require("assets/images/iconos/ecommerce.png")} style={{ marginRight:'15px' }} width="25px" />
                                <span 
                                    id={
                                        this.state.menuItemTradeMarketing == true
                                        ? "txtSidebarItemHover"
                                        : "txtSidebarItem"
                                    }
                                >Trade Marketing</span>
                            </Link>
                        </Menu.Item>
                    )
                }

                

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_SPIDER_DATA,
                        <Menu.Item key="sistema/spiderData" id="menuItemSidebar">
                            <Link to="/sistema/spiderData" 
                                onMouseEnter={() => {this.funActivarHover('menuItemSpiderData', 'SpiderData')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemSpiderData', 'SpiderData')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemSpiderData', 'SpiderData')}}
                            >
                                <img alt="" src={require("assets/images/iconos/spiderData.png")} style={{ marginRight:'15px' }} width="25px" />
                                <span 
                                    id={
                                        this.state.menuItemSpiderData == true
                                        ? "txtSidebarItemHover"
                                        : "txtSidebarItem"
                                    }
                                >Spider Data</span>
                            </Link>
                        </Menu.Item>
                    )
                }

                {/* {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_CONTROL_ACCESOS,
                        <Menu.SubMenu 
                            key="dashboard"
                            title={
                                <span> <i className="icon icon-dasbhoard"/><span> Control Accesos </span></span>
                            }>
                            
                            {
                                funPermisosObtenidos(
                                    this.props.permisos,
                                    PERMISO_SUBMODULO_PERMISOS,
                                    <Menu.Item key="sistema/controles/accesos/permisos" id="menuItemSidebar">
                                        <Link to="/sistema/controles/accesos/permisos" 
                                            onMouseEnter={() => {this.funActivarHover('menuSubItemPermisos', 'SubItemPermisos')}} 
                                            onMouseLeave={() => {this.funDesactivarHover('menuSubItemPermisos', 'SubItemPermisos')}}
                                            onClick={() => {this.funSeleccionarMenu('menuSubItemPermisos', 'SubItemPermisos')}}
                                        >
                                            <img 
                                                alt="" 
                                                src={require("assets/images/iconos/spiderData.png")} 
                                                style={{ marginRight:'15px' }} width="25px" />
                                            <span 
                                                id={
                                                    this.state.menuSubItemPermisos == true
                                                    ? "txtSidebarItemHover"
                                                    : "txtSidebarItem"
                                                }
                                            >Permisos</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            }

                            {
                                funPermisosObtenidos(
                                    this.props.permisos,
                                    PERMISO_SUBMODULO_TIPOS_USUARIOS,
                                    <Menu.Item key="sistema/controles/accesos/tiposUsuarios" id="menuItemSidebar">
                                        <Link to="/sistema/controles/accesos/tiposUsuarios" 
                                            onMouseEnter={() => {this.funActivarHover('menuSubItemTiposUsuarios', 'SubItemTiposUsuarios')}} 
                                            onMouseLeave={() => {this.funDesactivarHover('menuSubItemTiposUsuarios', 'SubItemTiposUsuarios')}}
                                            onClick={() => {this.funSeleccionarMenu('menuSubItemTiposUsuarios', 'SubItemTiposUsuarios')}}
                                        >
                                            <img 
                                                alt="" 
                                                src={require("assets/images/iconos/spiderData.png")} 
                                                style={{ marginRight:'15px' }} width="25px" />
                                            <span 
                                                id={
                                                    this.state.menuSubItemTiposUsuarios == true
                                                    ? "txtSidebarItemHover"
                                                    : "txtSidebarItem"
                                                }
                                            >Tipos de Usuarios</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            }
                            

                        </Menu.SubMenu>
                    )
                } */}

                

                </MenuItemGroup>
                <AppsNavigation/>
          </Menu>
        )
    }
}
  
export default SidebarItem