import Part from "./Part";

const Content = (props) => (
    <div>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part3} exercise={props.exercises3} />
    </div>
)

export default Content;