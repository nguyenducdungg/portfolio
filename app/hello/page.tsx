'use client'
import useSWR from 'swr'
export const fetcher = (url: string, options?: object) =>
  fetch(url, options)
    .then(data => data.json())

export default function Home() {
  const { data, isLoading } = useSWR('/api/hello', (url: string) => fetcher(url, { method: 'GET' }))
  // useEffect(() => console.log('data:', data), [data])
  console.log(data)

  return (!isLoading && <div>{data.name}</div>)
}
