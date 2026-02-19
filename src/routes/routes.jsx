import { createBrowserRouter } from "react-router-dom";
import NavbarContainer from "../components/Navbarblock/NavbarContainer";
import Layout from "../layout/Layout";
import Home from "../auth/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ResetPassword from "../auth/ResetPassword";
import ProfileContainer from "../components/Userprofile/ProfileContainer";
import MyAccount from "../components/Userprofile/MyAccount";
import AddProfile from "../components/Userprofile/AddProfile";
import UploadProfilePhoto from "../components/Userprofile/UploadProfilePhoto";
import ChangePassword from "../components/Userprofile/ChangePassword";
import DeleteAccount from "../components/Userprofile/DeleteAccount";
import AdminContainer from "../admin/AdminContainer";
import CreateAlbum from "../admin/album/CreateAlbum";
import AlbumLandingContainer from "../AlbumLanding/AlbumLandingContainer";
import PopularAlbumns from "../AlbumLanding/PopularAlbumns";


let myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element:<AlbumLandingContainer/>,
                children:[
                    {
                        path:"popular-albums",
                        element:<PopularAlbumns/>
                    }
                ]
            },
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            },
            {
                path: "/auth/reset-password",
                element: <ResetPassword />
            },
            {
                path: "/admin",
                element: <AdminContainer />,
                children: [
                    {
                        path: "create-album",
                        element: <CreateAlbum />,
                    }
                ]
            },
            {
                path: "/user/profile",
                element: <ProfileContainer />,
                children: [
                    {
                        index: true,
                        element: <MyAccount />
                    },
                    {
                        path: "add-account",
                        element: <AddProfile />,
                    },
                    {
                        path: "upload-profile-photo",
                        element: <UploadProfilePhoto />,
                    },
                    {
                        path: "change-password",
                        element: <ChangePassword />,
                    },
                    {
                        path: "delete-account",
                        element: <DeleteAccount />,
                    }
                ]

            },
            {
                path: "*",
                element: <h1> 404! page not found</h1>,
            },
        ]
    },
]);

export default myRoutes;