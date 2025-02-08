import './Circle.scss'

type Props = {
  variant: "black" | "green" | "red"
}

const Circle = ({ variant }: Props) => {

  let bgColor

  switch(variant) {
    case "black":
    bgColor = "black"
    break
    case "green":
    bgColor = "green"
    break
    case "red":
    bgColor = "red"
    break
  }
  return (
    <div className={`circle ${bgColor}`}></div>
  )
}

export default Circle