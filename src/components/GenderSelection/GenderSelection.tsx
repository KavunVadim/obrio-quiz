import './GenderSelection.scss'

import { ReactComponent as MaleSVG } from '../../assets/images/Pic_male.svg'
import { ReactComponent as FemaleSVG } from '../../assets/images/Pic_female.svg'
import { ReactComponent as Arrow } from '../../assets/images/Icons/Vector.svg'
import { Link } from 'react-router-dom'

const GenderSelection = () => {
  return (
    <div>
      <div>
        <h1>Gender Selection</h1>
        <div>
          <button>
            <Link to="/birthdate?gender=male">Male</Link>
          </button>
          <button>
            <Link to="/birthdate?gender=female">Female</Link>
          </button>
        </div>
      </div>
      <h1 className="title">
        Understand Yourself and Improve Relationships With Astrology
      </h1>
      <p className="subtitle">1-Minute Personal Assessment</p>
      <p className="text">Select your gender:</p>
      <div className="bloc-gender">
        <div className="bloc-gender--male">
          <MaleSVG />
          <div className="male-buttons">
            <div className="male-buttons--text">Male</div>
            <Arrow />
          </div>
        </div>
        <div className="bloc-gender--female">
          <FemaleSVG />
          <div className="female-buttons">
            <div className="female-buttons--text">Female</div>
            <Arrow />
          </div>
        </div>
      </div>
      <p className="footer-text">
        By continuing I agree with Privacy policy and Terms of use.
      </p>
      <p className="footer-text-location">
        Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia,
        Cyprus
      </p>
    </div>
  )
}

export default GenderSelection
