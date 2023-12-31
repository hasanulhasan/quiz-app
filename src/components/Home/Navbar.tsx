'use client'
import { setUser } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { auth } from "../Auth/Firebase";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetUsersQuery } from "@/redux/features/apiSlice";
import IUser from "@/Types";

const Navbar = () => {
  const {data} = useGetUsersQuery(null)
  const {user: currentUser} = useAppSelector(state => state.user)
  const users: IUser[] = data?.data
  let isAdmin = null;
  users?.filter(user=> {
    if((user.email === currentUser.email) && user.role === 'admin'){
      isAdmin = true;
    }
  })
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  };

  const handleLogout = async ()=> {
    await signOut(auth).then(() => {
      dispatch(setUser(null))
      router.push('/')
    })
  }

  return (
    <div>
      <header className="p-4 bg-gray-800 text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <a href="/" aria-label="Back to homepage" className="flex items-center p-2 text-4xl font-extrabold"> Quiz App </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link href='/quiz' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-3xl">Quiz</Link>
            </li>
            <li className="flex">
              <Link href='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-3xl">Blog</Link>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {
              currentUser?.email? 
              <>
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar alt="user avatar" src={`https://ui-avatars.com/api/bold=true?name=${currentUser?.email}`} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={()=> {router.push('/profile')}}>Profile</MenuItem>
                  <MenuItem onClick={()=> {router.push('/myScore')}}>My Score</MenuItem>
                  {
                    isAdmin && <>
                  <MenuItem onClick={()=> {router.push('/allScore')}}>All Score</MenuItem>
                  <MenuItem onClick={()=> {router.push('/addQuiz')}}>Add Quiz</MenuItem>
                  <MenuItem onClick={()=> {router.push('/manage-question')}}>Manage Quiz</MenuItem>
                    </>
                  }
                  <MenuItem onClick={()=> handleLogout()}>Logout</MenuItem>
                </Menu>
                </Box>
              </> : 
              <>
              <Link href='/login'><button className="self-center px-8 py-3 font-semibold rounded bg-blue-500 text-gray-100">Log in</button></Link>
              </>
            }
          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;