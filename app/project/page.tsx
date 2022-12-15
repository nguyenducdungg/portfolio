'use client'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'

export default function Home() {
  const { data, isLoading } = useSWR('/api/hello', (url: string) => fetcher(url, { method: 'GET' }))

  return (!isLoading
    && <>
    <div>{data.name}</div>
    <h1 className="roman">1231231</h1>
  </>)
}
