import { Icon } from '@iconify/react';

import { SideNavItem } from '../types/types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/admin-dashboard',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Projects',
    path: '/admin-dashboard',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/admin-dashboard/projects' },
      { title: 'Web Design', path: '/admin-dashboard/projects/web-design' },
      { title: 'Graphic Design', path: '/admin-dashboard/projects/graphic-design' },
    ],
  },
  {
    title: 'Messages',
    path: '/admin-dashboard/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/admin-dashboard/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/admin-dashboard/settings/account' },
      { title: 'Privacy', path: '/admin-dashboard/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/admin-dashboard/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
