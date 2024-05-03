
import FeedInfo from "@components/FeedInfo"
const Home = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <FeedInfo />
    </section>
  )
}
export const fetchCache = 'force-no-store';

export default Home
