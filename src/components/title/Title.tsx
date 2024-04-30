import "./Text.css"

type TTxt = {
    txt: string;
}

export default function Title({ txt }: TTxt) {
    return <span className="text-black title">{txt}</span>
}