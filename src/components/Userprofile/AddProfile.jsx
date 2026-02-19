import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import Languages from "./JSON/languages.json"
import Country from "./JSON/country.json"
import States from "./JSON/states.json"
import City from "./JSON/city.json"
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../../context/AuthContentApi';
import { __DB } from '../../backend/firebaseconfig';
import { doc, setDoc } from 'firebase/firestore';

const AddProfile = () => {

  let { authUser } = useContext(AuthUserContext);
  let navigate = useNavigate();
  let location = useLocation();
  let [userDetails, setUserDetails] = useState({
    username: location?.state?.username,
    contactNumber: location?.state?.contactNumber,
    gender: location?.state?.gender,
    dob: location?.state?.dob,
    age: location?.state?.age,
    lang: location?.state?.lang,
    country: location?.state?.country,
    state:location?.state?.state,
    city:location?.state?.city,
    address:location?.state?.address, 
    role: "user"
  })
  //! destructing the userdetails
  let { username, contactNumber, gender, dob, age, lang, country, state, city, address, role } = userDetails;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //! extracting 4 properties from the authuser
      let { displayName, photoURL, email, uid } = authUser;

      //! create an object to send inside the database
      //! payload oject(actual object)
      let payload = {
        ...userDetails,
        displayName,
        photoURL,
        uid
      }

      //! step-1: create a document reference inside the database (cloud Firestore) 
      let user_profile_collection = doc(__DB, "user_details", uid);
      //! step-2 :set or store the data inside the database
      await setDoc(user_profile_collection, payload);
      navigate( "/user/profile");
      toast.success("user details has been updated successfully");
    } catch (error) {
      toast.error(error.code.slice(5));
      console.log("Error while uploading data:", error);
    }

  };

  return (
    <section className='h-full w-full flex items-center justify-center bg-gray-900 text-white p-8' >
      <article className='min-h-[500px] w-[60%] bg-gray-800 py-6 rounded-lg px-8 shadow-lg'>
        <header className='text-center py-4 text-3xl font-bold bg-gray-700 rounded-lg uppercase'>Add user Details
        </header>
        <main className='mt-6'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div className='w-full flex gap-6'>
              <aside className='flex flex-col gap-2 w-1/3'>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id="username" onChange={handleInputChange} value={username}
                  className='outline-none border-white border py-2 px-3 rounded-lg bg-transparent text-white' />
              </aside>
              <aside className='flex flex-col gap-2 w-1/3'>
                <label htmlFor='contactNumber'>contactNumber</label>
                <input type='text' name='contactNumber' id="contactNumber" onChange={handleInputChange} value={contactNumber}
                  className='outline-none border-white border py-2 px-3 rounded-lg bg-transparent text-white' />
              </aside>
              <aside className='flex flex-col gap-2 w-1/3'>
                <label htmlFor='gender'>Gender</label>
                <div className='border py-2 px-2 rounded-md'>
                  <input type="radio" name='gender' value='male' onChange={handleInputChange} className='mr-1' checked={gender==="male"}/>Male
                  <input type="radio" name='gender' value='female' onChange={handleInputChange} className=' ml-2 mr-1' checked={gender==="female"} />Female
                  <input type="radio" name='gender' value='others' onChange={handleInputChange} className='  mr-1' checked={gender==="others"} />Others
                </div>
              </aside>
            </div>
            <div className='w-full flex gap-6'>
              <aside className='flex flex-col gap-2 w-1/3'>
                <label htmlFor='dob'>DOB</label>
                <input type="date" name='dob' id='dob' onChange={handleInputChange} value={dob}
                  className='outline-none border-white border py-2 px-3 rounded-lg bg-transparent text-white' />
              </aside>
              <aside className='flex flex-col gap-2 w-1/3'>
                <label htmlFor='age'>Age</label>
                <input type='text' name='age' id='age' onChange={handleInputChange} value={age}
                  className='outline-none border-white border py-2 px-3 rounded-lg bg-transparent text-white' />
              </aside>
              <aside className='flex flex-col gap-2 w-1/3'>
                <label htmlFor='lang'>Language</label>
                <input type="text" name="lang" id='lang' className='outline-none border-white border py-2 px-3 rounded-lg bg-transparent text-white'
                  onChange={handleInputChange} value={lang} list='langlist' />
                <datalist id="langlist">
                  {
                    Languages.map((language, index) => {
                      return <option key={index}>{language}</option>
                    })
                  }
                </datalist>
              </aside>
            </div>
            <div className='w-full flex gap-6'>
              <aside className='flex flex-col gap-2 w-1/3'>
                <label htmlFor='country'>Country</label>
                <input type="text" name='country' id='country' className='outline-none border-white border py-2 px-3 rounded-lg bg-gray-700 text-white '
                  onChange={handleInputChange} value={country} list='countrylist' />
                <datalist id="countrylist">
                  {
                    Country.map((country, index) => {
                      return <option key={index}>{country}</option>
                    })
                  }
                </datalist>
              </aside>
              <aside className='flex flex-col gap-2 w-[180px]' >
                <label htmlFor='state'>State</label>
                <input type='text' name='state' id='state' className='outline-none border-white border py-2 px-3 rounded-lg bg-gray-700 text-white '
                  onChange={handleInputChange} value={state} list='stateslist' />
                <datalist id="stateslist">
                  {
                    States.map((states, index) => {
                      return <option key={index}>{states}</option>
                    })
                  }
                </datalist>
              </aside>
              <aside className='  flex flex-col gap-2 w-[180px]'>
                <label htmlFor='city'>City</label>
                <input type='text' name='city' id='city' onChange={handleInputChange} value={city}
                  className='outline-none border-white border py-2 px-3 rounded-lg bg-transparent text-white'
                  list='citylist' />
                <datalist id="citylist">
                  {
                    City.map((city, index) => {
                      return <option key={index}>{city}</option>
                    })
                  }
                </datalist>
              </aside>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='address'>Address</label>
              <textarea name='address' id='address' onChange={handleInputChange} value={address}
                className='outline-none border-white border py-2 px-3 rounded-lg bg-transparent text-white'></textarea>
            </div>
            <div>
              <button className='bg-blue-600 hover:bg-blue-500 w-full py-3 rounded-lg text-white font-bold transition duration-300'>Add User</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
  ;
}

export default AddProfile