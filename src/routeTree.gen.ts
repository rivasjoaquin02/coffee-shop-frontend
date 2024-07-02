/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/_dashboard'
import { Route as StoreIndexImport } from './routes/store/index'
import { Route as StoreProductIdImport } from './routes/store/$productId'
import { Route as authRegisterImport } from './routes/(auth)/register'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as DashboardDashboardIndexImport } from './routes/_dashboard/dashboard.index'
import { Route as DashboardDashboardUsersImport } from './routes/_dashboard/dashboard.users'
import { Route as DashboardDashboardSuppliersImport } from './routes/_dashboard/dashboard.suppliers'
import { Route as DashboardDashboardQsImport } from './routes/_dashboard/dashboard.qs'
import { Route as DashboardDashboardOrdersImport } from './routes/_dashboard/dashboard.orders'
import { Route as DashboardDashboardInventoryImport } from './routes/_dashboard/dashboard.inventory'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const DashboardRoute = DashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const StoreIndexRoute = StoreIndexImport.update({
  path: '/store/',
  getParentRoute: () => rootRoute,
} as any)

const StoreProductIdRoute = StoreProductIdImport.update({
  path: '/store/$productId',
  getParentRoute: () => rootRoute,
} as any)

const authRegisterRoute = authRegisterImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardDashboardIndexRoute = DashboardDashboardIndexImport.update({
  path: '/dashboard/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardDashboardUsersRoute = DashboardDashboardUsersImport.update({
  path: '/dashboard/users',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardDashboardSuppliersRoute =
  DashboardDashboardSuppliersImport.update({
    path: '/dashboard/suppliers',
    getParentRoute: () => DashboardRoute,
  } as any)

const DashboardDashboardQsRoute = DashboardDashboardQsImport.update({
  path: '/dashboard/qs',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardDashboardOrdersRoute = DashboardDashboardOrdersImport.update({
  path: '/dashboard/orders',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardDashboardInventoryRoute =
  DashboardDashboardInventoryImport.update({
    path: '/dashboard/inventory',
    getParentRoute: () => DashboardRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard': {
      id: '/_dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterImport
      parentRoute: typeof rootRoute
    }
    '/store/$productId': {
      id: '/store/$productId'
      path: '/store/$productId'
      fullPath: '/store/$productId'
      preLoaderRoute: typeof StoreProductIdImport
      parentRoute: typeof rootRoute
    }
    '/store/': {
      id: '/store/'
      path: '/store'
      fullPath: '/store'
      preLoaderRoute: typeof StoreIndexImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard/dashboard/inventory': {
      id: '/_dashboard/dashboard/inventory'
      path: '/dashboard/inventory'
      fullPath: '/dashboard/inventory'
      preLoaderRoute: typeof DashboardDashboardInventoryImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/dashboard/orders': {
      id: '/_dashboard/dashboard/orders'
      path: '/dashboard/orders'
      fullPath: '/dashboard/orders'
      preLoaderRoute: typeof DashboardDashboardOrdersImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/dashboard/qs': {
      id: '/_dashboard/dashboard/qs'
      path: '/dashboard/qs'
      fullPath: '/dashboard/qs'
      preLoaderRoute: typeof DashboardDashboardQsImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/dashboard/suppliers': {
      id: '/_dashboard/dashboard/suppliers'
      path: '/dashboard/suppliers'
      fullPath: '/dashboard/suppliers'
      preLoaderRoute: typeof DashboardDashboardSuppliersImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/dashboard/users': {
      id: '/_dashboard/dashboard/users'
      path: '/dashboard/users'
      fullPath: '/dashboard/users'
      preLoaderRoute: typeof DashboardDashboardUsersImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/dashboard/': {
      id: '/_dashboard/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardDashboardIndexImport
      parentRoute: typeof DashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  DashboardRoute: DashboardRoute.addChildren({
    DashboardDashboardInventoryRoute,
    DashboardDashboardOrdersRoute,
    DashboardDashboardQsRoute,
    DashboardDashboardSuppliersRoute,
    DashboardDashboardUsersRoute,
    DashboardDashboardIndexRoute,
  }),
  AboutLazyRoute,
  authLoginRoute,
  authRegisterRoute,
  StoreProductIdRoute,
  StoreIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_dashboard",
        "/about",
        "/login",
        "/register",
        "/store/$productId",
        "/store/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_dashboard": {
      "filePath": "_dashboard.tsx",
      "children": [
        "/_dashboard/dashboard/inventory",
        "/_dashboard/dashboard/orders",
        "/_dashboard/dashboard/qs",
        "/_dashboard/dashboard/suppliers",
        "/_dashboard/dashboard/users",
        "/_dashboard/dashboard/"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/register": {
      "filePath": "(auth)/register.tsx"
    },
    "/store/$productId": {
      "filePath": "store/$productId.tsx"
    },
    "/store/": {
      "filePath": "store/index.tsx"
    },
    "/_dashboard/dashboard/inventory": {
      "filePath": "_dashboard/dashboard.inventory.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/dashboard/orders": {
      "filePath": "_dashboard/dashboard.orders.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/dashboard/qs": {
      "filePath": "_dashboard/dashboard.qs.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/dashboard/suppliers": {
      "filePath": "_dashboard/dashboard.suppliers.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/dashboard/users": {
      "filePath": "_dashboard/dashboard.users.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/dashboard/": {
      "filePath": "_dashboard/dashboard.index.tsx",
      "parent": "/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
