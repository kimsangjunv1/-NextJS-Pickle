// import React,{ useEffect } from "react";
// import BaseLayout from "@/components/layout/BaseLayout";

// import ServiceApi from '@/api/service_api';

// const index = () => {
//   const api = new ServiceApi();

//   // 고객이 신청한 서비스 데이터
  
//   useEffect(() => {
//       const init = async () => {
//         let res = await api.getTestData();

//         console.log("res", res);
//       };

//     init();
//   }, [])

//   return (
//     <div>
//       test
//       {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
//     </div>
//   )
// }

// export async function getStaticProps () {
//   return {
//     props: {
//       title: "테스트",
//       description: "설명 입니다.",
//       currentPage: "test"
//     }
//   }
// }

// export default index