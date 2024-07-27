import "@/assets/css/main.scss"
import { useEffect } from "react";
import { useRouter } from "next/router";
import BaseLayout from "@/components/layout/BaseLayout"

export default function App({ Component, pageProps }) {
    // const router = useRouter();

    // useEffect(() => {
    //     const handleStart = () => {
    //         console.log("0%")
    //         // document.getElementById("progress-bar").style.width = "100%";
    //     };
        
    //     const handleComplete = () => {
    //         console.log("100%")
    //         // document.getElementById("progress-bar").style.width = "0";
    //     };

    //     router.events.on("routeChangeStart", handleStart);
    //     router.events.on("routeChangeComplete", handleComplete);
    //     router.events.on("routeChangeError", handleComplete);

    //     return () => {
    //         router.events.off("routeChangeStart", handleStart);
    //         router.events.off("routeChangeComplete", handleComplete);
    //         router.events.off("routeChangeError", handleComplete);
    //     };
    // }, [router]);
    return (
        <BaseLayout title={pageProps.title} description={pageProps.description} currentPage={pageProps.currentPage}>
            <Component {...pageProps} />
        </BaseLayout>
    )
}
