import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'edc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c94'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'b2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '823'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'f28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '94c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b8b'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api', '3ee'),
    routes: [
      {
        path: '/api',
        component: ComponentCreator('/api', 'e85'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/create-a-pet',
        component: ComponentCreator('/api/create-a-pet', 'e14'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/info-for-a-specific-pet',
        component: ComponentCreator('/api/info-for-a-specific-pet', '7d6'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/list-all-pets',
        component: ComponentCreator('/api/list-all-pets', '758'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '063'),
    routes: [
      {
        path: '/docs/API Integration/1intro',
        component: ComponentCreator('/docs/API Integration/1intro', '39d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API Integration/2examples',
        component: ComponentCreator('/docs/API Integration/2examples', 'a7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/CLI Usage/intro',
        component: ComponentCreator('/docs/CLI Usage/intro', 'dfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1b9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
