import Card from "../components/cARD.JSX";

const About = () => {
  return (
    <section className="c-space">
      <section className="">
        <h2 className="text-heading mb-5 mt-5 pb-5 text-center">
          Programme of events
        </h2>

        <h1 className="headtext">
          1. Opening Hymn - I will enter his gates by Zitu Benafa
        </h1>
        <p className="  text-blue-300">Conducted By Austin Ugwu</p>
        <p className="subtext mb-5">
          Background: Written as a poem to accompany Beethoven’s “Ode to Joy,”
          Van Dyke composed this hymn while inspired by the Berkshire Mountains.
          He described it as a “hymn of trust and joy and hope,” meant to unite
          people in worship regardless of scientific or social change.
        </p>
        <hr />
      </section>

      <section className="">
        <h1 className="headtext">2. Opening Prayer</h1>
        <p className="  text-blue-300">By parish pastorial team</p>
        <p className="subtext mb-5">The priest officially opens the event</p>
        <hr />
      </section>
      <section className="">
        <h1 className="headtext">3. Opening remark</h1>
        <p className="  text-blue-300 mb-5">
          By the committe chairman - Mbigbo Charles
        </p>
        <hr />
      </section>
      <section className="">
        <h1 className="headtext">4. Breaking of kolanut</h1>
        {/* <p className="  text-blue-300 mb-5">
          By the committe chairman - Mbigbo Charles
        </p> */}
        <hr />
      </section>

      <section className="">
        <h2 className="text-heading mb-5 mt-5 pt-5 text-left">
          Part 1 - <span className="text-blue-300 ">Hymns </span>
          <br /><span className="text-2xl">conducted By Benedicta Obuh - CM</span>
        </h2>

        <h1 className="headtext">
          1. Opening Hymn - I will enter his gates by Zitu Benafa
        </h1>
        <p className="  text-blue-300">Conducted By Austin Ugwu</p>
        <p className="subtext mb-5">
          Background: Written as a poem to accompany Beethoven’s “Ode to Joy,”
          Van Dyke composed this hymn while inspired by the Berkshire Mountains.
          He described it as a “hymn of trust and joy and hope,” meant to unite
          people in worship regardless of scientific or social change.
        </p>
        <hr />
      </section>
    </section>
  );
};

export default About;
