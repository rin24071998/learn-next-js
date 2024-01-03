export interface IToken{
    status: 'waiting' | 'success',
    token: string
}
export interface IBreadcrumbs{
    href: string;
    name: string;
    icon: JSX.Element;
}
export interface IRoutes {
    pathname?: string;
    breadcrumbs?: IBreadcrumbs[]
}