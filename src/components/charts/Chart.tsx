import { RenderChart, type FieldDataType } from "dataviz-components";

type DataChartProps = {
  data: FieldDataType;
};

export const Chart = ({ data }: DataChartProps) => {
  return (
    <div
      style={{ height: "400px" }}
      className="d-flex align-items-center justify-content-center"
    >
      <RenderChart {...data} />
    </div>
  );
};
