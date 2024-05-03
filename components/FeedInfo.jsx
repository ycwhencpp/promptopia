import Feed from "@components/Feed"

const FeedInfo = () => {
    return (
        <>
            <h1 className="text-center head_text">
                Discover & Share
                <br className="max-md:block"></br>
                <span className="orange_gradient text-center">AI Powered Prompts</span>
            </h1>
            <p className="text-center desc">
                Promptopia is a platform for writers to discover and share AI generated prompts.
            </p>
            <Feed />
        </>
    )
}

export default FeedInfo