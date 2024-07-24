// 라이프 사이클
import React from "react";
// import Image from "next/image";

const Footer = ({ pageList, corpData }) => {
    return (
        <footer id="footer">
            <div className="footer_inner">
                <article>
                    {/* <Image src="/img/common/img-logo.svg" alt="픽클 로고" width={40} height={40} priority={true} /> */}
                    <img src="/images/common/img-logo-brand.svg" alt="픽클 로고" />
                </article>
                <article>
                    <section>
                        {/* {pageList.map((item, key) => {
                            return (
                                <a id={item.id} href={`/${item.id}`} index={key} key={key}>
                                    {item.name}
                                </a>
                            );
                        })} */}
                    </section>
                    <section>
                        {/* {corpData.map((item, key) => {
                            return (
                                <section key={key}>
                                    <h5>{item.type}</h5>
                                    {item.data.map((item, key) => {
                                        return <p key={key}>{item}</p>;
                                    })}
                                </section>
                            );
                        })} */}
                        <h5>ⓒ PICKLE. All rights reserved.</h5>
                    </section>
                </article>
            </div>
        </footer>
    );
};

export default Footer;
