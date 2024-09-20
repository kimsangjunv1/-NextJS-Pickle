import React from "react";
import Link from "next/link";

const TitleComponents = ({ title, desc, image, route }) => {
    return (
        <section className="section-title-container">
            { title &&
                <h5>
                    {/* {image && <img src={`/images/icon/graphic/ico-graphic-${image}.svg`} alt="/" />} */}
                    {title}
                </h5>
            }
            {/* { desc && <p>{desc}</p> } */}
            { route && <Link href={`${route}`}>더 보기</Link> }
        </section>
    )
}

export default TitleComponents