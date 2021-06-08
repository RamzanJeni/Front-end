import SearchUniversity from '../videoSection/videoSection'
import TopFields from '../topFields/topFields'
import Cards from '../FeatureCard/featureCard'
import Intro from '../Introduction/Introduction'

const Home = () => {
    return (
        <div>
            <Cards></Cards>
            <Intro></Intro>
            <SearchUniversity></SearchUniversity>
            <TopFields></TopFields>
        </div>
    );
}

export default Home;