import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt, faTimes, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import Submenu from './SubMenu';
import {SidebarData} from './SidebarData';


const Nav = styled.div`
  background: #161925;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:#fff;
`;

const SidebarNav = styled.nav`
  background: #161925;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Adminsidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    function showSidebar (){
        setSidebar(!sidebar);
    }
    const LogOut=()=>{
        localStorage.clear();
        window.location.replace('/Admin')
    }
    return (
        <>
            <Nav className="py-1 sticky-lg-top">
                <NavIcon to="#">
                    <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
                </NavIcon>
                <Link  className=" text-decoration-none text-white me-auto mx-3 mt-2" to='/AdminPanel'><h1 style={{fontFamily:"Rancho,cursive"}}>Psy-Awareness</h1></Link>
                <button type='button' className='btn btn-danger rounded-pill mx-5' onClick={LogOut}><span>Log-out <FontAwesomeIcon icon={faSignOutAlt}/></span></button>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <div className="px-4  py-5 mb-2 d-flex flex-row">
                        <FontAwesomeIcon size="2x"  style={{marginRight:"7%"}} color="white" icon={faUserAlt} />
                        <h4 className="text-white">Hello Admin</h4>
                        <FontAwesomeIcon style={{marginLeft:'auto'}} color="red" size="2x" icon={faTimes} onClick={showSidebar} />
                    </div>
                    {SidebarData.map((item,index)=>{
                        return(
                            <Submenu item={item} key={index} />
                        )
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Adminsidebar
