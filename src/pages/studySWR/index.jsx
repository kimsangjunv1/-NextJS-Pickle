import BaseLayout from '@/components/layout/BaseLayout';
import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => {
    return fetch(url).then(res => res.json());
}

const index = () => {
    const url = "https://jsonplaceholder.typicode.com/todos"

    const { data, isLoading, error } = useSWR(url, fetcher)
    
    return (
        <div>
            {/* <p>로딩 상태 : {JSON.stringify(isLoading)}</p>
            <p>{isLoading ? "" : `데이터 상태 : ${JSON.stringify(data)}`}</p>
            <p>에러 상태 : {JSON.stringify(error)}</p> */}
        </div>
    )
}

export default index