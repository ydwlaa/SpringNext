

import Layout from '../../components/layout'
import Head_context from '../../components/head'
import Footer_context from '../../components/footer'
import Header_context from '../../components/header'
import Note_context from '../../components/note'

const siteTitle = 'Notes'

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const data = {
        noteID : '1'
        };
    const res = await fetch('http://localhost:3000/read?' + new URLSearchParams(data));
    const noteData = await res.json();

    console.log('123412412' + 'index');
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        noteData,
      },
    }
  }

export default function Notes({noteData}){
    return (
        <Layout>
            <Head_context>
                <title>{siteTitle}</title>
            </Head_context>

            <Header_context/>


            <Note_context noteData = {noteData}/>


            <Footer_context/>

        </Layout>
        


    )


}