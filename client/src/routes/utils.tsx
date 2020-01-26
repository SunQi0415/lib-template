import React from 'react';
import { Icon } from 'antd';
import { Route, Link } from "react-router-dom";
// 渲染当前组件
export const RouteWithSubRoutes = (route: any) => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props =>{
            return (
                <route.component {...props} routes={route.routes} />
            )
        }}
    />
);
// 循环渲染当前路由数组中一维数组中的组件
export const RenderRoutes = ({routes} : any) => {return (routes.map((route: any, i: any) => <RouteWithSubRoutes key={i} {...route} />))};

// - children  返回当前路径， 会与当前route组件进行匹配， 如果匹配， 则返回当了路径match， 否则返回Null
/*
* 有时您需要渲染路径是否与位置匹配。在这些情况下，您可以使用儿童道具功能。它的工作方式与渲染完全相同，只是它会被调用，无论是否匹配。子渲染道具接收与组件和渲染方法相同的所有路径道具，除非路径无法匹配URL，否则匹配为空。这允许您根据路径是否匹配动态调整UI。如果路线匹配，我们在这里添加一个活动类
* */
export const OldSchoolMenuLink = ({ route }: any) => (
    <Route
        path={route.path}
        exact={route.exact}
        children={({ match }: any) => {
            return (
                <div className={match ? "active" : ""}>
                    <Icon type={route.icon}/>
                    <Link to={route.path}>{route.name}</Link>
                </div>
            )
        }}
    />
);