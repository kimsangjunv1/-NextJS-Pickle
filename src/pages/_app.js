import "@/assets/css/main.scss"

import BaseLayout from "@/components/layout/BaseLayout"

export default function App({ Component, pageProps }) {
    return (
        <BaseLayout title={pageProps.title} description={pageProps.description} currentPage={pageProps.currentPage}>
            <Component {...pageProps} />
        </BaseLayout>
    )
}
