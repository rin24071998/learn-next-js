const appRouter = {
    LOGIN: '/login',
    DASHBAORD: '/dashboard'
}
const PUBLIC_ROUTER = [appRouter.LOGIN];
const PRIVATE_ROUTER = [appRouter.DASHBAORD];
export {
    appRouter,
    PUBLIC_ROUTER,
    PRIVATE_ROUTER
}