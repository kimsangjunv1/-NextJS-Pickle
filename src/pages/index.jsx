export default function Home() {
  return (
      <div>
        HOME
      </div>
  )
}


export async function getStaticProps() {
  return {
    props: {
      title: "Test",
      description: "Test page description",
      currentPage: "test",
    },
  };
}