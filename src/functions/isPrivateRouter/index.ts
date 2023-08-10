import { APP_ROUTES } from "@/constants/app-routes"

/**
 * 
 * @param asPath string
 * @returns Boolean
 * 
 */

export const CheckIsPublicRoute = (asPath: string) => {
    const appPublicRoutes = Object.values(APP_ROUTES.public)

    return appPublicRoutes.includes(asPath)
}