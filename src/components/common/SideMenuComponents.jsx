import Link from "next/link";

const SideMenuComponents = ({ data }) => {
    return (
        <aside id="sideMenu">
            <ul className="side-menu-inner">
                {data.map((item, key) => 
                    <SubMenuComponents item={ item } key={key}/>
                )}
            </ul>
        </aside>
    )
}

const SubMenuComponents = ({ item }) => {
    return (
        <ul className="group">
            <ItemComponents title={ item.title } path={ item.href }/>

            {item.group &&
                <ul className="sub-menu">
                    {item.group.map((e, key) => 
                        <ItemComponents title={ e.title } path={ e.href } key={key}/>
                    )}
                </ul>
            }
        </ul>
    )
}

const ItemComponents = ({ title, path }) => {
    return (
        <li className="">
            <Link href={`/admin/${path}`}>{title}</Link>
        </li>
    )
}

export default SideMenuComponents