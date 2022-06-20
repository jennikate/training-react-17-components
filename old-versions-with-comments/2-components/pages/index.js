import { data } from '../SpeakerData';
import Speaker from '../src/components/Speaker';

const IndexPage = () => {

  // app uses bootstrap (it's not what we're learning here so this is faster)
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => {
          return (
            <Speaker key={speaker.id} speaker={speaker} />
          )
        })}
      </div>
    </div>
  )
}
export default IndexPage;
