import Link from "next/link";

const PageTitleComponents = ({ title, path }) => {
  return (
    <article id="pageTitle">
        <div className="page-title-inner">
            <h2>{title}</h2>
            <div className="action">
                <Link href="/">
                    Main
                </Link>
                <p>&gt;</p>
                <Link href={`/${path}`}>
                    {path}
                </Link>
            </div>
        </div>
    </article>
  )
}

export default PageTitleComponents