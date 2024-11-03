import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BaseLayout from "@/components/layout/BaseLayout";

import "@/assets/css/main.scss";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {

    return (
        <QueryClientProvider client={queryClient}>
            <BaseLayout title={pageProps.title} description={pageProps.description} currentPage={pageProps.currentPage}>
                <Component {...pageProps} />
            </BaseLayout>
        </QueryClientProvider>
    );
}