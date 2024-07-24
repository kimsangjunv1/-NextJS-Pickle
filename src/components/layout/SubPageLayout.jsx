import { Fragment } from 'react'

import PageTitleComponents from '../common/PageTitleComponents'
import SideMenuComponents from '../common/SideMenuComponents'

const SubPageLayout = ({ children, pageTitle, pagePath, detailClassName ,menuList }) => {
    return (
        <Fragment>
            <PageTitleComponents title={pageTitle} path={pagePath}/>
            <article id="pageContents" className={`${detailClassName}`}>
                {menuList ? <SideMenuComponents data={menuList} /> : ""}
                
                <section className="contents">
                    {children}
                </section>
            </article>
        </Fragment>
    )
}

export default SubPageLayout