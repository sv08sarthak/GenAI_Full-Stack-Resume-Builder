import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"

function App() {


  return (
    <AuthProvider>   

      < RouterProvider router={router} />   

    </AuthProvider>
    //rapped full application in AuthProvider now full data will be going in application set in AuthProvider
  )
}

export default App
