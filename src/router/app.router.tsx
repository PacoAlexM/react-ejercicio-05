import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout'
import { HomePage } from '@/heroes/pages/home/HomePage'
import { HeroPage } from '@/heroes/pages/hero/HeroPage'
import { SearchPage } from '@/heroes/pages/search/SearchPage'

const AdminLayout = lazy(() => import('@/admin/layouts/AdminLayout'));
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'heroes/:idSlug',
                element: <HeroPage />,
            },
            {
                path: 'search',
                element: <SearchPage />,
            },
            {
                path: '*',
                element: <h1>404</h1>,
            },
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />,
            },
        ],
    },
]);
