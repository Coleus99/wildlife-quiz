import Question from './question'

const Home = () => {
  return (
    <div>
      <div className="questions">
          <Question 
            number="1"
            active={true}
            text="How long do tigers live in the wild?" 
            answer1="5-10 years"
            answer1score="5"
            answer2="10-12 years" 
            answer2score="10"
            answer3="12-15 years"
            answer3score="15"
            />
          <Question 
            number="2"
            active={false}
            text="How heavy is a great white shark?" 
            answer1="Up to 1,500 kg"
            answer1score="10"
            answer2="Up to 2,250 kg" 
            answer2score="15"
            answer3="Up to 4,000 kg"
            answer3score="5"
            />
          <Question 
            number="3"
            active={false}
            text="How long is a komodo dragon?" 
            answer1="Up to 3m long"
            answer1score="15"
            answer2="Up to 2m long" 
            answer2score="10"
            answer3="Up to 1m long"
            answer3score="5"
            />
          <Question 
            number="4"
            active={false}
            text="What's the wingspan of a steller's sea eagle?" 
            answer1="1m"
            answer1score="10"
            answer2="2.5m" 
            answer2score="15"
            answer3="5m"
            answer3score="5"
            />
          <Question 
            number="5"
            active={false}
            text="How long do Anaconda's live?" 
            answer1="5-10 years"
            answer1score="5"
            answer2="10-30 years" 
            answer2score="15"
            answer3="20-40 years"
            answer3score="10"
            />
        </div>
      </div>
  );
}

export default Home;