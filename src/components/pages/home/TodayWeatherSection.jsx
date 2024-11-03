import Article from "@/components/layout/Article";

const TodayWeatherSection = ({ DBWeatherImage, select }) => {
    return (
        <Article id={"image"}>
            <div style={{ backgroundImage: `url(${DBWeatherImage?.data[select]?.attributes?.image?.large})` }}></div>
        </Article>
    )
}

export default TodayWeatherSection