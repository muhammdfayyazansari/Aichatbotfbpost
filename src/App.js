import logo from "./logo.svg";
import "./App.css";
import MyAvatar from "./Components/Avatar/Avatar";
import Stack from "@mui/material/Stack";
import { Grid, Typography, Box } from "@mui/material";
import FacebookPost from "./Components/FacebookPost/FacebookPost";


function App() {

  const myArr = [];
  for(let i=0; i<10; i++){
    myArr.push({title: `Muhammad Fayyaz Ansari ${i+1}`, date: `0${i+1} jan 2023`})
  }
  return (

    <Grid container sx={{
      minHeight: "100vh",
      backgroundColor: "#282C34",
      pt: 5,
    }}>
      <Grid item xs={12} >
        <Typography variant="h2" sx={{
          display: "flex",
          justifyContent: "center",
          color: "#D5D7DA",
        }}
        mb={2}
        >
          FacebookPost
        </Typography>
        <Typography variant="h5" sx={{
          display: "flex",
          justifyContent: "center",
          color: "#D5D7DA",
        }}
        mb={2}
        >
          Muhammad Fayyaz Ansari
        </Typography>
        
      <Grid container sx={{display: "flex", justifyContent: "center",alignItems: "center", flexDirection: "column"}}>
        {myArr.map(item => <FacebookPost
          title={item['title']}
          // avatarImgUrl={"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"}
          avatarImgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/200269459_319267176305455_3807096988707147344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zo4MtbId1nkAX8utHgR&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCSIk4zuHd32jc0mPN-9LgEY_mbtd6rNF1xA1mlmUxPWQ&oe=63D1EED5"}
          date={item['date']}
          description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          facilis natus cupiditate incidunt in recusandae nesciunt quod rem
          omnis voluptate, numquam ullam possimus minus saepe a reiciendis?
          Molestias, rem nisi?"


        
        />)}
       
        
        

      </Grid>
      </Grid>

    </Grid>
    // <div className="App">
    //   <header className="App-header">
      
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
