import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {path: '/todos', element: <TodosPage/>},
            {path: '/albums', element: <AlbumsPage/>},
            {path: '/comments', element: <CommentsPage/>}
        ]
    }
]);

export {
    router
}