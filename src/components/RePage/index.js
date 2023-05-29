import {useState} from 'react'
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

const RePage = props => {
  const [text, setText] = useState('')
  const [valueDrop, setValueDrop] = useState(topicsList[0].displayText)
  const [errorMsg, setErrorMsg] = useState('')
  const [foundErr, setFoundErr] = useState(false)

  const handleDropDown = e => {
    setValueDrop(e.target.value)
  }

  return (
    <MeetUpContext.Consumer>
      {value => {
        const {name, setDetails} = value
        const {history} = props
        const submitDetails = () => {
          if (text === '') {
            setErrorMsg('Please enter your Name')
            setFoundErr(true)
          } else {
            const objCreated = {
              text,
              valueDrop,
            }
            setDetails(objCreated)
            history.replace('/')
          }
        }
        return (
          <>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </div>
            <div>
              <h1>Let us join</h1>
              <form onSubmit={submitDetails}>
                <div>
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    onChange={e => setText(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="topics" value={valueDrop}>
                    TOPICS
                  </label>
                  <select
                    id="topics"
                    onChange={handleDropDown}
                    value={valueDrop}
                  >
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <button type="submit">Register Now</button>
                  {foundErr && <p>{errorMsg}</p>}
                </div>
              </form>
            </div>
          </>
        )
      }}
    </MeetUpContext.Consumer>
  )
}

export default RePage
