import { Separator } from "../ui/separator"

const SectionTitle = ({text}: {text: string}) => {

  return (
    <div>
        <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
        <Separator className="mt-8"/>
    </div>
  )
}
export default SectionTitle