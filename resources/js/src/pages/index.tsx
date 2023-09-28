import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AuthUserLayout from './layouts/AuthUserLayout/AuthUserLayout'
import GuestUserLayout from './layouts/GuestUserLayout'
import HomePage from './ui/HomePage/HomePage'
import LoginPage from './ui/LoginPage'
import SignUpPage from './ui/SignUpPage'
import ProfilePage from './ui/ProfilePage'
import PostPage from './ui/PostPage'
import SettingsPage from './ui/SettingsPage'
import TagPage from './ui/TagPage'
import SavedPage from '@/pages/ui/SavedPage'
import FullPostModalPage from '@/pages/ui/FullPostModalPage'

export const GuestUserRouter = () => (
    <Routes>
        <Route path="/" element={<GuestUserLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Route>
    </Routes>
)

export const AuthUserRouter = () => {
    const location = useLocation()
    const state = location.state as { backgroundLocation?: Location }

    const clearLocationState = () => {
        window.history.replaceState(undefined, 'state')
    }

    useEffect(() => {
        window.addEventListener('beforeunload', clearLocationState)

        return () => {
            window.removeEventListener('beforeunload', clearLocationState)
        }
    }, [])

    return (
        <>
            <Routes location={state?.backgroundLocation || location}>
                <Route path="/" element={<AuthUserLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/tag/:tag" element={<TagPage />} />
                    <Route path="/saved" element={<SavedPage />} />
                    <Route path="/user/:username" element={<ProfilePage />} />
                    <Route path="/post/:id" element={<PostPage />} />
                </Route>

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {state?.backgroundLocation &&
                <Routes>
                    <Route path="/post/:id" element={<FullPostModalPage />} />
                </Routes>
            }
        </>
    )
}
