import {Redirect, Link} from 'react-router-dom'
import MeetUpContext from '../../context/MeetUp'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const MainPage = props => {
  const v = null

  const redirectCall = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <MeetUpContext.Consumer>
      {value => {
        const {name, objDetails} = value
        console.log(objDetails)
        return (
          <>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
            </div>

            {objDetails.text ? (
              <h1>Hello {objDetails.text}</h1>
            ) : (
              <h1>Welcome to Meetup</h1>
            )}

            {objDetails.valueDrop ? (
              <p>
                Welcome to <span>{objDetails.valueDrop}</span>
              </p>
            ) : (
              <p>Please register for the topic</p>
            )}

            {objDetails.text ? null : (
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            )}

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          </>
        )
      }}
    </MeetUpContext.Consumer>
  )
}

export default MainPage
