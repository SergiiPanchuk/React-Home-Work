import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {CarPage} from "./pages/CarPage";
import {PostPage} from "./pages/PostPage";
import {CommentsPage} from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayouts/>, children: [
            {index: true, element: <Navigate to={'cars'}/>},
            {path: 'cars', element: <CarPage/>},
            {path: 'posts', element: <PostPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    }
])

export {
    router
}