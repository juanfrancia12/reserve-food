import { AppRoutes } from "@components/Routes/AppRoutes"
import "@styles/style.scss"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AppRoutes />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
