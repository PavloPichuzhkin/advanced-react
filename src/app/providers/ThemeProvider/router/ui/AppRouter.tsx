import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
    return (

        <Routes>
            {routeConfig.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <div className="page-wrapper">
                            <Suspense fallback={<div>Loading...</div>}>
                                {element}
                            </Suspense>
                        </div>}
                />
            ))}
        </Routes>
    )
}

export default AppRouter
