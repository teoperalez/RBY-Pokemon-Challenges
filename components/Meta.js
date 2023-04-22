import Head from 'next/head'

export default function Meta({title, description, tags}) {
    return (
        <Head>
            <script src="https://unpkg.com/@microsoft/signalr@latest/dist/browser/signalr.min.js"></script>
            <script src="https://unpkg.com/vue@latest/dist/vue.global.js"></script>
            <script src="http://localhost:8085/dist/gameHookMapperClient.js"></script>
            <title>RBY Pokemon Challenges || {title}</title>
            <meta charSet="UTF-8"></meta>
            <meta name="description" content={description}/>
            <meta name="keywords" content={tags}/>
            <meta name="author" content="Teo Peralez"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="icon" href="/RBY.ico" type = "image/x-icon"></link>
        </Head>
    )
}