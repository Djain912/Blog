import Carddisplay from "./Carddisplay"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import Stat from "./Stat"
export default function Home() {
    return (
<>

<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
<br>
</br>
<Link to="/getpost" className="text-2xl underline p-5 font-mono font-bold">Recent Articles ....</Link>

<Carddisplay />
{/* <Stat /> */}
<Footer />

</>

    )
}