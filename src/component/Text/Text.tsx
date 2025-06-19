interface TextProps {
  img: string;
  par1: string;
  par2: string;
}
import  "./Text.css";
function Text({ img, par1, par2 }: TextProps) {
  return (
 <div
  className="
    d-flex flex-column
    d-md-flex d-md-flex-row
    justify-content-center align-items-center
    text-container">
  <img src={img} alt="" className="img-fluid pad" />
  <div className="text-center  ">
    <p className="m-0 pb-2 font">{par1}</p>
    <p className="m-0 font1">{par2}</p>
  </div>
</div>

  );
}

export default Text;
