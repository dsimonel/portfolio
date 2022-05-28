const WorkItem = (props) => {
  const imgLink = props.imgLink;
  const workType = props.workType;
  const workDesc = props.workDesc;
  const firstButton = props.firstButton;
  const secondButton = props.secondButton;
  const href1 = props.href1;
  const href2 = props.href2;

  return (
    <div
      style={{ backgroundImage: `url(${imgLink})`}}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <div className="text-2xl font-bold text-orange-700 text-center pt-5">
          {workType}
        </div>
        <p className="mt-1 pl-12 pr-8 text-sm font-bold text-orange-700">
          {workDesc}
        </p>
        <div className="mb-0 text-center">
          <a
            href={href1}
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-200 text-green-800 font-bold text-lg">
              {firstButton}
            </button>
          </a>
          <a
            href={href2}
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-amber-200 text-green-800 font-bold text-lg">
              {secondButton}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
