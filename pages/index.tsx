import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Website Nextjs</title>
            </Head>
            <div className='bg-[url("/background.jpg")] bg-cover bg-no-repeat h-screen overflow-hidden relative'>
                <Navbar />
                <Hero />
            </div>
        </div>
    )
}
