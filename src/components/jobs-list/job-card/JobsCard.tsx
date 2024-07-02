import { Logo, Details, Tags } from "./card-comps";

const JobsCard = ({ position, postedAt, location, contract }) => {
  const details = { position, postedAt, location, contract };
  const tags = []
  return (
    <div className="w-full p-6 bg-[#ffffff] shadow-2xl shadow-desaturatedDarkCyan/30 rounded-md flex flex-col justify-start items-start">
      <Logo />
      <div className="w-full mt-2">
        <Details {...details} />
        <div className="w-full h-[1.5px] bg-darkGrayishCyan/25 mt-4"></div>
        <Tags />
      </div>
    </div>
  );
};

export default JobsCard;
