import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dashboard } from "./pages/Dashboard";
import { Account } from "./pages/Account";
import { Bookings } from "./pages/Bookings";
import { Cabins } from "./pages/Cabins";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Settings } from "./pages/Settings";
import { Users } from "./pages/Users";

import { AppLayout } from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobleStyles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              path="/"
              element={<Navigate replace to="dashboard" />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            style: {
              background: "#4caf50",
              color: "#fff",
              duration: 3000,
            },
          },
          error: {
            style: {
              background: "#f44336",
              color: "#fff",
              duration: 5000,
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
