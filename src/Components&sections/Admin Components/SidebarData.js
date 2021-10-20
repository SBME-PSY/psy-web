
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faUserMd, faUsers } from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [

    {
      title: 'View & Edit Professionals',
      path: '/Admin/professionals',
      icon: <FontAwesomeIcon icon={faUserMd} />
    },
    {
      title: 'View & Edit Users',
      path: '/Admin/users',
      icon: <FontAwesomeIcon icon={faUsers} />,
      iconClosed: <FontAwesomeIcon icon={faArrowDown} />,
      iconOpened: <FontAwesomeIcon icon={faArrowUp} />,
    },
    // {
    //   title: 'Team',
    //   path: '/team',
    //   icon: <FontAwesomeIcon icon={faHome} />,
    // },
    // {
    //   title: 'Messages',
    //   path: '/messages',
    //   icon: <FontAwesomeIcon icon={faHome} />,
  
    //   iconClosed: <FontAwesomeIcon icon={faHome} />,
    //   iconOpened: <FontAwesomeIcon icon={faHome} />,
  
    //   subNav: [
    //     {
    //       title: 'Message 1',
    //       path: '/messages/message1',
    //       icon: <FontAwesomeIcon icon={faHome} />,
    //     },
    //     {
    //       title: 'Message 2',
    //       path: '/messages/message2',
    //       icon: <FontAwesomeIcon icon={faHome} />
    //     }
    //   ]
    // },
    // {
    //   title: 'Support',
    //   path: '/support',
    //   icon: <FontAwesomeIcon icon={faHome} />
    // }
  ];