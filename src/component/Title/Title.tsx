interface TitleProps {
  classname?: string;
  Title: string;
}
import'./Title.css'
function Title({ classname = '', Title }: TitleProps) {
  return <h2 className={`title-component ${classname}`}>{Title}</h2>;
}

export default Title;
