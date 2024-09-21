import { SWRConfig } from "swr";
import BaseLayout from "@/components/layout/BaseLayout";
import "@/assets/css/main.scss";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {

    return (
        <BaseLayout title={pageProps.title} description={pageProps.description} currentPage={pageProps.currentPage}>
            <Component {...pageProps} />
        </BaseLayout>
    );
}