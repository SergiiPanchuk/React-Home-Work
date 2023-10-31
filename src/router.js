import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {userService} from "./services/userService";
import {PostsPage} from "./pages/PostsPage";
import {postService} from "./services/postService";
import {PostDetailsPage} from "./pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayouts/>, children:[
            {
                index:true,element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>,children:[
                    {
                        path:':id',element:<UserDetailsPage/>, loader:({params:{id}})=>userService.getById(id),
                        children:[
                            {path:':id', element:<PostsPage/>,loader:({params:{id}})=>postService.getByUserId(id),
                                children:[
                                    {
                                        path:':postId', element:<PostDetailsPage/>,loader:({params:{postId}})=>postService.getById(postId)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    }
])

export {
    router
}