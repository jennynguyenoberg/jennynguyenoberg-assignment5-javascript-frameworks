import Image from 'next/image'
import photo from '../../../public/photo.jpg'
import Head from 'next/head'

export default function PorfolioProject({ params }) {
  if (params.id === 'project1') {
    return (
      <div>
        <Head>
          <title>Portfolio of Jenny Nguyen Öberg</title>
          <meta name="description" content="Portfolio of Jenny Nguyen Öberg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Porfolio Project – id# {params.id}</h1>
        <Image
          src={photo}
          alt="portfolio"
        />
        <div>
          Project: {params.id}
        </div>
      </div>
    )
  }
  return (
    <div>
      <h1>Porfolio Project (alt2) – id# {params.id}</h1>
      <div>
        Project: {params.id}
      </div>
    </div>
  )
}
