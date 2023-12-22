import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import Story from "./Story";
import StoryP from "./StoryP";
import ProfileMenu from "./ProfileMenu";
import ShareFeed from "./ShareFeed";
import NavigationBar from "./Navigation-bar";
import ListComponent from "./fffff";
import PostComponent from "./postface";
const firebaseConfig = {
  apiKey: "AIzaSyBXfmK5ba8kkfqZtYB8EcD33HZsndN6jTE",
  authDomain: "web-project-3cf62.firebaseapp.com",
  projectId: "web-project-3cf62",
  storageBucket: "web-project-3cf62.appspot.com",
  messagingSenderId: "308218257202",
  appId: "1:308218257202:web:76518b9d7b6b39bd2e012b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export async function getstory(db) {
  const citiesCol = collection(db, "story");
  const citySnapshot = await getDocs(citiesCol);
  const storyList = citySnapshot.docs.map((doc) => doc.data());
  return storyList;
}

export async function getfrom(db) {
  const citiesCol = collection(db, "from");
  const citySnapshot = await getDocs(citiesCol);
  const fromList = citySnapshot.docs.map((doc) => doc.data());
  return fromList;
}

export async function getposet(db) {
  const citiesCol = collection(db, "post");
  const citySnapshot = await getDocs(citiesCol);
  const fromList = citySnapshot.docs.map((doc) => doc.data());
  return fromList;
}
console.log("ffffffffffffffffffff", getCities(db));

const arr = [
  "Ten questions you should answer truthfully",
  "Five unbelievable facts about money",
  "Best Pinterest Boards for learning about business",
  "Skills that you can learn from business",
];

function App() {
  const [allNews, setAllNews] = useState(arr);
  const [cities, setCities] = useState([]); // Initialize state for cities
  const [view, setview] = useState(2);

  const [fromddd, fromdddssss] = useState([]);

  const [posts, setpostsssssss] = useState([]);
  const [storysss, setstory] = useState([]); // Initialize state for cities

  const [views, setviews] = useState(false);

  useEffect(() => {
    // Function to fetch cities data asynchronously
    const fetchCitiesData = async () => {
      try {
        // Call the getCities function passing your database instance
        // 'db' is assumed to be your Firebase Firestore instance
        const cityList = await getCities(db);
        const storylist = await getstory(db);
        const fromror = await getfrom(db);

        const allvpost = await getposet(db);

        setpostsssssss(allvpost);
        console.log("5555555555555", cityList);

        console.log("666666666666", storylist);

        console.log("777777777777777", fromror);

        setCities(cityList); // Update state with fetched city data
        setstory(storylist);
        fromdddssss(fromror);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCitiesData(); // Call the function when the component mounts
  }, [db]); // Include 'db' in the dependency array if it's a variable coming from props or context

  return (
    <span className="llllla">
      <NavigationBar />

      <div className="lalalalal">
        <div className="t1t1">
          <span className="hanen">
            <ProfileMenu />
          </span>
        </div>

        <div className="t1t222">
          <span className="rzagha">
            <Story />
            {storysss.map((item) => {
              return <StoryP sto={item} />;
            })}
          </span>

          <span className="saedden">
            <ShareFeed />
          </span>

          <div>
            {posts.map((item) => {
              return <PostComponent item={item} />;
            })}
          </div>
        </div>

        <div className="t1t333">
          <span className="frofofofofof">
            <div className="list-container">
              <h2>User List</h2>
              <ul className="user-list">
                {fromddd.map((item, index) => (
                  <li key={index} className="user-item">
                    <img
                      src={item.addimage}
                      alt={item.name}
                      className="avatar"
                    />
                    <div className="user-info">
                      <h3>{item.name}</h3>
                      &nbsp; &nbsp;
                      <p>{item.objec}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </span>

          <div className="App">
            <div className="target">Today’s news </div>
            <div className="itemss">
              {cities.map((item, index) => {
                if (index <= view) {
                  return (
                    <div className="">
                      <a className="opo" href={item.tit}>
                        {item.namees}
                      </a>
                      <div className="iiii">{item.howeee}</div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            {view === 4 ? (
              <> </>
            ) : (
              <div
                className="lla"
                onClick={() => {
                  setview(4);
                }}
              >
                {" "}
                ... view all lastes news{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </span>
  );
}

export default App;
