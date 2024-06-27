import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BenefitsListItemType = {
  className?: string;
  heading?: string;
  listDescription?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const BenefitsListItem: NextPage<BenefitsListItemType> = ({
  className = "",
  heading,
  listDescription,
  propWidth,
  propAlignSelf,
}) => {
  const listItemStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`w-[82rem] flex flex-row flex-wrap items-start justify-start gap-[1.5rem] max-w-[118%] shrink-0 text-left text-[1.438rem] text-black font-p ${className}`}
      style={listItemStyle}
    >
      <img
        className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/star.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[51rem] max-w-full mq1100:min-w-full">
        <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-[1.125rem]">
          {heading}
        </h3>
        <div className="self-stretch relative text-[1rem] leading-[150%] font-medium">
          {listDescription}
        </div>
      </div>
    </div>
  );
};

export default BenefitsListItem;
