import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import App from "./App"
import "./styles/style.scss"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
)

// <React.StrictMode>
{
  /* </React.StrictMode> */
}
