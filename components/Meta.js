import Head from 'next/head'

export default function Meta({title, description, tags}) {
    return (
        <Head>
            <title>RBY Pokemon Challenges || {title}</title>
            <meta charset="UTF-8"></meta>
            <meta name="description" content={description}/>
            <meta name="keywords" content={tags}/>
            <meta name="author" content="Teo Peralez"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="icon" href="/RBY.ico" type = "image/x-icon"></link>
        </Head>
    )
}