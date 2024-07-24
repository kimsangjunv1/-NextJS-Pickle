// 리액트 라이프 사이클 함수
import Link from "next/link";

const Navigation = ({ pageList, corpData }) => {
    return (
        <nav id="nav" className="navigation">
            <div className="nav-inner">
                {/* 메뉴 및 회사정보 */}
                <section>
                    {/* 메뉴 */}
                    <ul>
                        {pageList.map((item, key) => {
                            return (
                                <motion.li
                                    key={key}
                                    initial={{
                                        y: 0,
                                        translateX: "-200%",
                                        color: "#ffffff00",
                                    }}
                                    animate={{
                                        y: 0,
                                        translateX: "0%",
                                        color: "#000000ff",
                                    }}
                                    exit={{
                                        y: 0,
                                        translateX: "200%",
                                        color: "#ffffff00",
                                    }}
                                    transition={{
                                        type: "spring",
                                        duration: 1,
                                        delay: 0.04 * key,
                                        ease: [0, 0.71, 0.2, 1.5],
                                    }}
                                >
                                    <div>
                                        {Array(2)
                                            .fill(0)
                                            .map((_, key) => {
                                                return (
                                                    <Link href={`/${item.id}`} id={item.name} key={key}>
                                                        <i>0{key + 1}</i>
                                                        {item.name}
                                                    </Link>
                                                );
                                            })}
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ul>
                    {/* 메뉴 END */}

                    {/* 회사정보 */}
                    <ul>
                        {corpData.map((item, key) => {
                            return (
                                <motion.li
                                    key={key}
                                    initial={{
                                        y: 0,
                                        translateX: "-500%",
                                        color: "#ffffff00",
                                    }}
                                    animate={{
                                        y: 0,
                                        translateX: "0%",
                                        color: "#000000ff",
                                    }}
                                    exit={{
                                        y: 0,
                                        translateX: "500%",
                                        color: "#ffffff00",
                                    }}
                                    transition={{
                                        type: "spring",
                                        duration: 1,
                                        delay: 0.04 * key,
                                        ease: [0, 0.71, 0.2, 1.5],
                                    }}
                                >
                                    <p>{item.type}</p>
                                    <section>
                                        {item.data.map((list, key) => {
                                            return <li key={key}>{list}</li>;
                                        })}
                                    </section>
                                </motion.li>
                            );
                        })}
                    </ul>
                    {/* 회사정보 END */}
                </section>
                {/* 메뉴 및 회사정보 END */}

                {/* 가림막 */}
                <section>
                    {Array(8)
                        .fill(0)
                        .map((_, key) => {
                            return (
                                <motion.div
                                    className="rect"
                                    key={key}
                                    initial={{ y: 0, translateX: "-100%" }}
                                    animate={{ y: 0, translateX: "0%" }}
                                    exit={{ y: 0, translateX: "100%" }}
                                    transition={{
                                        delay: 0.03 * key,
                                        type: "spring",
                                        mass: 0.1,
                                        stiffness: 80,
                                        damping: 10,
                                    }}
                                />
                            );
                        })}
                </section>
                {/* 가림막 END */}
            </div>
        </nav>
    );
};

export default Navigation;
