
export default function Heading(props) {
  const { size } = props;
  switch (size) {
    case "h1":
      return <h1 className="lg:text-[26px] md:text-[23px] text-white font-semibold">{props.title}</h1>;
    case "h2":
      return (
        <h2 className="lg:text-[20px] md:text-[18] text-white font-semibold">
          {props.title}
        </h2>
      );
      case "h3":
        return <h3 className="lg:text-[36px] md:text-[31px] text-white font-normal">{props.title}</h3>;
    default:
      return <h4>{props.title}</h4>;
  }
}






