import { data } from '../SpeakerData';

// CREATING & REFACTORING
// When creating components it's often easiest to create the frame 
// in a single component first
// then refactor from the outside in
// take the most inner piece and refactor that out (e.g. here it is a Session)
// then the next level (e.g. Sessions)
// and so on
// this helps you stay clear on which components are children of which parents
// but also makes it easier to see where it makes sense to break something out to 
// it's own component, and where items can remain within the same component

// WHY COMPONENTS
// - make the app easier to build
// - make the app easier to scale
// - make the app easier to maintain

// WHAT IS A COMPONENT
// - building blocks that when combined together create a UI
// - independent, reusable parts of an app
// - allow for easy building combined with a great browser experience

// WHY BREAK OUT (OR NOT) TO A COMPONENT?
// is it clearer (e.g. a logo and site name are always part of the header so remain within it)
// is it reusable (e.g. a speaker card with details about a speaker)
// does it make it easier to build/maintin (e.g. a logout component within a header)


// PROPS & DESTRUCTURING
// const Session = (props) => { // React components take one thing, props
//   return (
//     <span className="session w-100">
//       {props.title} <strong>Room: {props.room}</strong> // we can specify props.x, but we have to repeat the word props each time
//     </span>
//   )
// }

// const Session = (props) => { // React components take one thing, props
// const title = props.title; // we can specify them as variables so as not to have to repeat props in te return
// const room = props.room;
//   return (
//     <span className="session w-100">
//       {title} <strong>Room: {room}</strong>
//     </span>
//   )
// }

// Session is our lowest level component, it calls no other
const Session = ({ title, room }) => { // to simplify further we can destructure the props in the field as consts
  return (
    <span className="session w-100">
      {title} <strong>Room: {room}</strong>
    </span>
  )
}

// Sessions consumes Session
const Sessions = ({ sessions }) => {
  return (
    <div className="sessionBox card h-250">
      {/* 
        We pass the specific data as parameters we want to use 
        : child uses { title, room } 
      */}
      <Session title={sessions[0].title} room={sessions[0].room.name} />
      {/* 
        Alternatively we could pass the session object and let the child component decide what to use 
        : child uses { session }, then declares const {title, room } = session;
        : child could also use nested destructoring in the props but this can get quite complex
      */}
      {/* <Session session={sessions[0]} /> */}
      {/* 
        Another option is to expand the passed in object with ... 
        child uses { title, room }
        and in the jsx we need to use room.name
      */}
      {/* <Session {...sessions[0]} /> */}
      {/* 
        There are lots more ways, but these are the three most commonly seen (Peter Kellner (PluralSite training))
        All options are valid depending on the needs, when it is very specific
        items from the object that will be used and there's only a few of them the
        first option is usually the safest. If there's a large amount you may not want
        to specify them all out, and then using option 2 or 3 make more sense
      */}
    </div>
  )
}

// IndexPage consumes Sessions which consumes Session
const IndexPage = () => {

  // app uses bootstrap (it's not what we're learning here so this is faster)
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => {
          const {
            id,
            bio,
            first,
            last,
            favorite,
            twitterHandle,
            company,
            sessions,
          } = speaker;

          return (
            <div
              key={id}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"
            >
              <div className="card card-height p-4 mt-4">
                <div classname="speak-img d-flex flex-row justify-content-center align-items-center h-300">
                  <img
                    className="contain-fit"
                    src={`/images/speaker-${id}.jpg`}
                    width="300"
                    alt={`${first} ${last}`}
                  />
                </div>
                <div className="speaker-info">
                  <div className="d-flex justify-content-between mb-3">
                    <h3 className="text-truncate w-200">
                      {first} {last}
                    </h3>
                  </div>
                </div>
                <p>{bio} {company} {twitterHandle} {favorite}</p>
              </div>
              <Sessions sessions={sessions} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default IndexPage;
