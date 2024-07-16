import React from 'react';
import Card from '../components/Card';

import PriceCard from '../components/PriceCard';
import ReviewCard from '../components/ReviewCard';
import Form from '../components/Form';

const Review = () => {
    const data = [
        {
          img: "r1.jpg",
          desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
          name: "— Garry Alexander",
        },
        {
          img: "r2.jpg",
          desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
          name: "— Garry Alexander",
        },
        {
          img: "r3.jpg",
          desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
          name: "— Garry Alexander",
        },
      ];
  return (
    <div>
        <main>
        <div className="container">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="containerf">
          <div className="heading">
            <h1>Features</h1>
            <hr
              style={{
                width: "500px",
                border: "2px solid blue",
                textAlign: "center",
                marginLeft: "450px",
              }}
            ></hr>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>
          <div className="fd">
            <div className="imagef">
              <img src="f1.jpg"></img>
            </div>
            <div className="desc">
              <h1>Big Benefits for Small Business</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul>
                <li>Pointing has no control</li>
                <li>A small river named Duden flows</li>
                <li>Roasted parts of sentences fly into your mouth</li>
              </ul>
            </div>
          </div>
          <div className="fd">
            <div className="desc">
              <h1>Big Benefits for Small Business</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul>
                <li>Pointing has no control</li>
                <li>A small river named Duden flows</li>
                <li>Roasted parts of sentences fly into your mouth</li>
              </ul>
            </div>
            <div className="imagef">
              <img src="f1.jpg"></img>
            </div>
          </div>
          <div className="fd">
            <div className="imagef">
              <img src="f1.jpg"></img>
            </div>
            <div className="desc">
              <h1>Big Benefits for Small Business</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul>
                <li>Pointing has no control</li>
                <li>A small river named Duden flows</li>
                <li>Roasted parts of sentences fly into your mouth</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="price">
          <div>
            <h1>Choose the plan that’s right for your business</h1>
            <hr
              style={{
                textAlign: "center",
                width: "200px",
                border: "2px solid blue",
                marginLeft: "600px",
              }}
            ></hr>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>
          <div className="containerPC">
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </div>
        <div className="review">
          <h1>That’s why 100,000+ Love Frame</h1>
          <hr></hr>
          <p
            
          >
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <div>
            {data.map((r) => (
              <ReviewCard r={r} />
            ))}
          </div>
        </div>
        <div className="try">
          <h1>Try It Today</h1>
          <hr
           
          ></hr>
          <p
           
          >
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <button
            style={{
              textAlign: "center",
              marginLeft: "600px",
              marginBottom: "30px",
            }}
            className="btn btn-primary"
          >
            Get It Now
          </button>
          <img src="try1.jpg"></img>
          <div>
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">What is Instant?</h5>
                    <p className="card-text">
                   Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name of Lorem
                      Ipsum decided to leave for the far World of Grammar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Is this available to my country?
                    </h5>
                    <p className="card-text">
           The Big Oxmox advised her not to do so, because there were
                      thousands of bad Commas, wild Question Marks and devious
                      Semikoli, but the Little Blind Text didn’t listen. She
                      packed her seven versalia, put her initial into the belt
                      and made herself on the way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      How do I use the new features of Frame App?
                    </h5>
                    <p className="card-text">
                  On her way she met a copy. The copy warned the Little
                      Blind Text, that where it came from it would have been
                      rewritten a thousand times and everything that was left
                      from its origin would be the word "and" and the Little
                      Blind Text should turn around and return to its own, safe
                      country.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      I have technical problem who do I email?
                    </h5>
                    <p className="card-text">
                     But nothing the copy said could convince her and so it
                      didn’t take long until a few insidious Copy Writers
                      ambushed her, made her drunk with Longe and Parole and
                      dragged her into their agency, where they abused her for
                      their.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="join">
          <h1 className="jh" >
          Join With Over 100K Members
          
          </h1>
              <p className="jp">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
              <button className="jb" >Get it Now</button>
        </div>
      <div className="contact">
        <div className="form">
            <Form/>
        </div>
        <div className="add">
       <h4>EMAIL</h4> 
probootstrap@gmail.com
 <h4>PHONE</h4>
+30 976 1382 9921
<h4>FAX</h4>
+30 976 1382 9922
<h4>ADDRESS </h4>
San Francisco, CA <br></br>
4th Floor8 Lower<br></br>
San Francisco street, M1 50F
        </div>

     </div>
     
      </main>
    </div>
  )
}

export default Review